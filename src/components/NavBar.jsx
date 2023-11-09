import React from "react";
import logo from '../images/logo.png';

const BarraNavegacion = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4">
            <a className="navbar-brand" href='/'>
                <img src={logo} alt="logo" height='100' />
            </a>
            <a className="navbar-brand" href="#">MI-APP</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegación">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse p-4" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Ofertas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Tarjetas de Regalo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sucursales</a>
                </li>
                </ul>
            </div>
        </nav>
    )
};

export default BarraNavegacion;
