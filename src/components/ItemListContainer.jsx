import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    //Consulta a nuestra coleccion de datos
    useEffect(() => {
        const db = getFirestore();
        const itemsCollections = collection(db, "items");

        //Para filtrar por precio
        //const q = query(itemsCollections, where("price", "<", 10000));
        //Puedo agregar botones para filtrados

        //Si tendo ID, puedo filtrar los productos por ID, sino traigo la colección entera. (Filtrado por categoría)
        const q = id ? query(itemsCollections, where("category", "==", id)) : itemsCollections;

        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            setLoading(false);
        })
    }, [id])

    return (
        <div className="container">
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;