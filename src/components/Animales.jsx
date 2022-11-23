import React from "react";

const Animales = () => {
    return (
        <div className="container mb5">
            <div className="row">
                <div className="col-md-6 text-center">
                    <p><img src="images/portada-perros.JPEG" alt="Productos para perros" width = "400" height="600" /></p>
                    <p>PERROS</p>
                    <p> <a href="#" className="btn bg-light" target="_blank">VER MÁS</a></p>
                </div>
                <div className="col-md-6 text-center">
                    <p><img src="images/portada-gatos.JPG" alt="Productos para gatos" width = "400" height="600" /></p>
                    <p>GATOS</p>
                    <p> <a href="#" className="btn bg-light" target="_blank">VER MÁS</a></p>
                </div>
            </div>
        </div>
    )
}

export default Animales;