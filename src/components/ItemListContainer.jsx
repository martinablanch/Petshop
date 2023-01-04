import { addDoc, getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemList from "./ItemList";
import arrayProducts from "./json/products.json";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { id } = useParams();

    /*        useEffect(() => {
                const promise = new Promise((res, rej) => {
                    setTimeout(() => {
                        res(id ? arrayProducts.filter(item => item.category === id) : arrayProducts);
                    }, 2000)
                })
        
                promise.then((data) => {
                    setItems(data);
                })
            }, [id])  */

    //Cargar productos en nuestra Collection en Firebase
    /*     useEffect(() => {
            const db = getFirestore();
            const itemsCollections = collection(db, "items");
    
            arrayProducts.forEach((item) => {
                addDoc(itemsCollections, item); //addDoc: método propio de Firestore. También podría haber puesto, en vez de "item": {name:     item.name, image: item.image, etc}
                                                
            })
        }, []) */


    //Consulta a nuestra coleccion de datos
    useEffect(() => {
        const db = getFirestore();
        const itemsCollections = collection(db, "items");

        //Para filtrar por precio
        const q = query(itemsCollections, where("price", "<", 2000));
        //Puedo agregar botones para filtrados

        //Si tendo ID, puedo filtrar los productos por ID, sino traigo la colección entera. (Filtrado por categoría)
        /* const q = id ? query(itemsCollections, where("categoria", "==", id)) : itemsCollections; */

        //Cargar los productos a Firebase 
        /*       arrayProducts.forEach((item) => {
                  addDoc(itemsCollections, item);
              }) */


        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
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