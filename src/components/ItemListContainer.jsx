import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import arrayProducts from "./json/products.json";


const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res(id ? arrayProducts.filter(item => item.category === id) : arrayProducts);
            }, 2000)
        })

        promise.then((data) => {
            setItems(data);
        })
    }, [id])

    return (
        <div className="container">
            <h3 className="text-center mb-5">Productos</h3>
            <ItemList items={items} />
            
        </div>
    )
}

export default ItemListContainer;