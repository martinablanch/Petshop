import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container bg-light mb-5">
            <div className="row">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src="images/logo.png" alt="Barto" width="80" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">ANIMAL</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">SERVICIOS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">REFUGIO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CURIOSIDADES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">AYUDA</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CONTACTO</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex bg-light align-items-center justify-content-end me-5">
                        <CartWidget />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;