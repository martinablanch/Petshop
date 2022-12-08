import React from "react";
import { useState } from "react";

const ItemCount = ({ stock }) => {

    const [counter, setCounter] = useState(1);

    const decreaseStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const increaseStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const onAdd = () => {
        if (stock > 0) {
            console.log('Agregaste ' + counter + ' productos al carrito');
        }
    }

    return (
        <div className="container">
            <div className="row mb-6 me-5 ">
                <div className="col-md-12 text-center d-flex justify-content-center pb-2">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-dark" onClick={decreaseStock}> - </button>
                        <button type="button" className="btn btn-outline-dark">{counter}</button>
                        <button type="button" className="btn btn-outline-dark" onClick={increaseStock}> + </button>
                    </div>
                </div>
            </div>
            <div className="row mb-6 me-5">
                <div className="col-md-12 text-center d-flex justify-content-center">
                    <button type="button" className="btn btn-outline-dark" onClick={onAdd}> Agregar al carrito </button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;