import { Link, useParams } from "react-router-dom";


const CompletedPurchase = () => {
    const { id } = useParams();

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <img src="../images/heart.png" alt="Corazón" width={130} />
                    <h1>¡Gracias por tu compra!</h1>
                    <p>Tu número de orden es: {id}</p>
                </div>
                <div className="justify-content-center">
                    <Link to={"/"} className="btn btn-dark"> Volver al inicio</Link>
                </div>
            </div>
        </div>
    )

}

export default CompletedPurchase;