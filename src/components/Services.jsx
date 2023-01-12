const Services = () => {
    return (
        <div className="container">
            <h1 className="text-center">NUESTROS SERVICIOS</h1>
            <div className="row">
                <div className="col-md-6 my-5 position-relative">
                    <img src="../images/veterinaria.jpg" alt="Veterinaria" width={"500"} className="opacity-75" />
                    <h3 className="text-center position-absolute top-50 start-50 translate-middle-x">VETERINARIA</h3>
                </div>
                <div className="col-md-6 my-5 position-relative">
                    <img src="../images/peluqueria.jpg" alt="Peluquería" width={"500"} className="opacity-75" />
                    <h3 className="text-center position-absolute top-50 start-50 translate-middle-x">PELUQUERÍA</h3>
                </div>
                <div className="col-md-6 my-5 position-relative">
                    <img src="../images/adiestramiento.jpg" alt="Adiestramiento" width={"500"} className="opacity-75" />
                    <h3 className="text-center position-absolute top-50 start-50 translate-middle-x">ADIESTRAMIENTO</h3>
                </div>
                <div className="col-md-6 my-5 position-relative">
                    <img src="../images/paseos.jpg" alt="Paseos" width={"500"} className="opacity-75" />
                    <h3 className="text-center position-absolute top-50 start-50 translate-middle-x">PASEOS</h3>
                </div>
                <div className="col-md-6 my-5 position-relative">
                    <img src="../images/nutricion.jpg" alt="Nutrición" width={"500"} className="opacity-75" />
                    <h3 className="text-center position-absolute top-50 start-50 translate-middle-x">NUTRICIÓN</h3>
                </div>
            </div>
        </div>
    )
}

export default Services;