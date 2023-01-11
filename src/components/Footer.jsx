import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container bg-light border-top">
            <div className="row my-3">
                <div className="col-md-4">
                    <img src="../images/logo.png" alt="Logo" width="80" />
                    <h2>BARTO</h2>
                    <h6>PETSHOP</h6>
                </div>
                <div className="col-md-4">
                    <p>Ciudad de San Rafael, Mendoza, Argentina</p>
                    <p>Calle Siempre Viva 123</p>
                </div>
                <div className="col-md-4 d-flex justify-content-end align-items-center">
                    <Link to={"/"}><img src={"../images/facebook.png"} className="me-1" alt={"Facebook"} width={"32"} /></Link>
                    <Link to={"/"}><img src={"../images/instagram.png"} className="me-1" alt={"Instagram"} width={"32"} /></Link>
                    <Link to={"/"}><img src={"../images/whatsapp.png"} className="me-1" alt={"WhatsApp"} width={"32"} /></Link>
                    <Link to={"/"}><img src={"../images/maps.png"} className="me-1" alt={"Google Maps"} width={"32"} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;