import React from "react";
import { Link } from 'react-router-dom';
import './Home.css';



export const Contacto = () => { 
    const abrirEnlace = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>

            <div lassName="listaentera">
                <p className="titulo">Contacto</p>
                <ul className="mi-lista">
                    <li><Link className="no-link-style" to="/">Inicio</Link></li>
                    <li><Link className="no-link-style" to="/Login">Registro</Link></li>
                    <li><Link className="no-link-style" to="/Login">Estudiante</Link></li>
                    <li><Link className="no-link-style" to="/Contacto">Contacto</Link></li>
                </ul>
            </div>

            <div class="wrapper">
                <div class="navbar">
                    <p>Redes sociales</p>
                    <div class="navbar__item -blue">
                            <span class="navbar__icon" onClick={() => abrirEnlace('https://www.twitch.com')}>
                            <i class="fa-brands fa-twitch"></i>
                        </span>
                    </div>
                    <div class="navbar__item -orange">
                        <span class="navbar__icon" onClick={() => abrirEnlace('https://www.youtube.com')}>
                            <i class="fa-brands fa-youtube"></i>
                        </span>
                    </div>
                    <div class="navbar__item -navy-blue">
                        <span class="navbar__icon" onClick={() => abrirEnlace('https://www.facebook.com')}>
                            <i class="fa-brands fa-facebook"></i>
                        </span>
                    </div>
                    <div class="navbar__item -black">
                        <span class="navbar__icon" onClick={() => abrirEnlace('https://www.github.com')}>
                            <i class="fa-brands fa-github"></i>
                        </span>
                    </div>
                    <div class="navbar__item -black">
                        <span class="navbar__icon" onClick={() => abrirEnlace('https://www.tiktok.com')}>
                            <i class="fa-brands fa-tiktok"></i>
                        </span>
                    </div>
                </div>
            </div>

        
        </>



    )
}
export default Contacto;