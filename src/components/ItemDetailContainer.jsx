import { useParams } from "react-router-dom";
import { useEffect, useState  } from "react";
import ItemDetail from "./ItemDetail";
//import arrayProducts from "./json/products.json"; 
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => { //en estos () solo se reciben props 

    const [item, setItem] = useState([]);
    const { id } = useParams();
    /* 
        useEffect(() => {
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(arrayProducts.find(item => item.id === parseInt(id))); //filtro arrayProducts y devolver un objeto
                }, 2000)
            })
    
            promise.then((data) => {
                setItem(data);
            })
        }, [id]) */

    //Consulto un documento pasado por ID
    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "items", id);
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({ id: snapShot.id, ...snapShot.data() });
            } else {
                console.log("El producto no está disponible");
            }
        })
    }, [])

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;