import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {

    return(
                <>
            <div className="listaentera">
                <p className="titulo">Juan Pablo II</p>
                <ul className="mi-lista">
                    <li><Link className="no-link-style" to="/">Inicio</Link></li>
                    <li><Link className="no-link-style" to="/Login">Registro</Link></li>
                    <li><Link className="no-link-style" to="/Login">Estudiante</Link></li>
                    <li><Link className="no-link-style" to="/Contacto">Contacto</Link></li>
                </ul>
            </div>

            <div className="contenedor">
                <div className="square colegio">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="container">
                        <h2>Colegio</h2>
                        <h3>+10</h3>
                        <p>Mas de 10 colegios en el mundo para el mejor aprendizaje</p>
                        
                    </div>
                </div>

                <div className="square colegio">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="container">
                        <h2>Estudiante</h2>
                        <h3>+9000</h3>
                        <p>Somos mas de 9000 estudiantes que tienen el mejor estudio del pais</p>
                        
                    </div>
                </div>

                <div className="square colegio">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="container">
                        <h2>Profesor</h2>
                        <h3>+100</h3>
                        <p>Mas de 100 profesores para tu aprendizaje personalizado</p>
                        
                    </div>
                </div>
            </div>
            

            <div>

            </div>
        </>



    )
}
export default Home;