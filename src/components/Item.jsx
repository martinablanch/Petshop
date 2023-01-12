import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div key={item.id} className="card col-md-4 mb-2 border border-0">
            <Link to={"/item/" + item.id} className="text-dark text-decoration-none">
                <img src={item.image} className="card-img-top img-thumbnail" alt={item.product} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.product}</h5>
                    <p className="card-text">${item.price}</p>
                    <button className="btn btn-dark">Ver más</button>
                </div>
            </Link>
        </div>
    )
}

export default Item;