import { useState, useContext } from "react";
import { getFirestore, addDoc, collection, writeBatch, doc, getDoc } from "firebase/firestore"
import { CartContext } from "./context/CartContext";
import { Navigate } from "react-router-dom";

const Checkout = () => {
    const { cart, totalPrice, clear } = useContext(CartContext);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [orderID, setOrderID] = useState("");

    const generateOrder = (e) => {
        e.preventDefault()
        const date = new Date();
        const order = {
            buyer: { name: name, phone: phone, email: email },
            items: cart.map(item => ({ id: item.id, title: item.product, price: item.price, quantity: item.quantity, totalPrice: item.quantity * item.price })),
            total: totalPrice(),
            orderDate: `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}}`
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderID(snapShot.id);
            const batch = writeBatch(db);

            cart.forEach(item => {
                let product = doc(db, "items", item.id);
                getDoc(product).then((snapShot) => {
                    let productData = snapShot.data();
                    batch.update(product, { stock: productData.stock - item.quantity });
                    batch.commit();
                })
            })

            clear();
        })
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" placeholder="Ingrese su nombre y apellido" onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="telefono" placeholder="Ingrese su teléfono" onChange={(e) => { setPhone(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Ingrese su email" onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <button type="submit" className="btn btn-dark" onClick={generateOrder}>Finalizar</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table table-striped text-center">
                        <thead>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id} className="align-middle">
                                    <td><img src={item.image} alt={item.product} width={80} /></td>
                                    <td>{item.product}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.quantity * item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                                <th>${totalPrice()}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <div className="row">
                <div className="col text-center">
                    {orderID !== "" ? <Navigate to={"/completedpurchase/" + orderID} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;