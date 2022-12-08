import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container bg-light mb-5">
            <div className="row">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}><img src="../images/logo.png" alt="Barto" width="80" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                                <div className="dropdown-center">
                                    <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ANIMAL
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="dropdown-item" to={"/category/perros"}>Perros</NavLink></li>
                                        <li><NavLink className="dropdown-item" to={"/category/gatos"}>Gatos</NavLink></li>
                                    </ul>
                                </div>




                                <div className="dropdown-center">
                                    <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        SERVICIOS
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="dropdown-item" to={"/category/perros"}>Veterinaria</NavLink></li>
                                        <li><NavLink className="dropdown-item" to={"/category/gatos"}>Peluquería</NavLink></li>
                                        <li><NavLink className="dropdown-item" to={"/category/gatos"}>Paseos</NavLink></li>
                                        <li><NavLink className="dropdown-item" to={"/category/gatos"}>Adiestramiento</NavLink></li>
                                        <li><NavLink className="dropdown-item" to={"/category/gatos"}>Nutricionista</NavLink></li>
                                    </ul>
                                </div>


                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="page" to={"/category/refugio"}>REFUGIO</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="page" to={"/category/curiosidades"}>CURIOSIDADES</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="page" to={"/category/ayuda"}>AYUDA</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="page" to={"/category/contacto"}>CONTACTO</NavLink>
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