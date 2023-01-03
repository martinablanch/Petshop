import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useState } from "react";
import { useEffect } from "react";

const Document = () => {
    const [producto, setProducto] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "items", "MZgm297WgD2gZ5ps11EU");
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                console.log(snapShot.data());
            } else {
                console.log("El producto no está disponible");
            }
        })
    }, [])

    return (
        <div>
            <h1>Document</h1>
        </div>
    )
}

export default Document;