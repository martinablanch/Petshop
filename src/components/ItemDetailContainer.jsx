import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import arrayProducts from "./json/products.json";

const ItemDetailContainer = () => { //en estos () solo se reciben props 

    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProducts.find(item => item.id === parseInt(id))); //filtro arrayProducts y devolver un objeto
            }, 2000)
        })

        promise.then((data) => {
            setItem(data);
        })
    }, [id])

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;