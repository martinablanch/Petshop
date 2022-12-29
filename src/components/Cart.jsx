import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, cartTotal, clear, removeItem, totalPrice } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12">
                        <div className="alert alert-danger text-center" role="alert">
                            No hay productos en tu carrito
                        </div>
                        <Link to={"/"} className="btn btn-dark d-flex justify-content-center">Ir al shop</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
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
                                    <td><Link onClick={() => { removeItem(item.id) }} title="Eliminar producto"><img src={"/images/trash3.svg"} alt={"Eliminar producto"} width={20} /></Link></td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                                <th>${totalPrice()}</th>
                                <th className="justify-content-end">
                                    <Link onClick={clear} className="btn btn-dark">Vaciar carrito</Link>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-center">
                                <button className="btn btn-dark ">Finalizar compra</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;