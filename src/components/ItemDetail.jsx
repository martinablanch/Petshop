import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity);
    }

    useEffect(() => {
        setItemStock(item.stock);
    }, [item])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.image} alt={item.product} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{item.product}</h1>
                    <h5>${item.price}</h5>
                    <p>{item.description}</p>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center pb-5">
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;