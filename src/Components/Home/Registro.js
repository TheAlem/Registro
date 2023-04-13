import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase';

export const Registro = () => {

    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        course: '',
        birthDate: '',
        idCard: '',
    });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            await db.collection('students').add(student);
            alert('Estudiante registrado con éxito');
            setStudent({
                firstName: '',
                lastName: '',
                email: '',
                course: '',
                birthDate: '',
                idCard: '',
            });
        } catch (error) {
            console.log(error);
            alert('Error al registrar estudiante: ', error.message);
        }
    };


    return (
        <>
            <div className="listaentera">
                <p className="titulo">Registro de Estudiante</p>
                <ul className="mi-lista">
                    <ul className="mi-lista">
                        <li><Link className="no-link-style" to="/">Inicio</Link></li>
                        <li><Link className="no-link-style" to="/Registro">Registro</Link></li>
                        <li><Link className="no-link-style" to="/Estudiante">Estudiante</Link></li>
                        <li><Link className="no-link-style" to="/Contacto">Contacto</Link></li>
                    </ul>
                </ul>
            </div>

            <form onSubmit={handleSubmit} className="contaner">
                <p className="Registro">Nombre</p>
                    <input placeholder="Nombre" className="input" 
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={student.firstName}
                        onChange={handleChange}
                        required />

                <p className="Registro">Apellido</p>
                    <input placeholder="Apellido" className="input" type="text"
                        id="lastName"
                        name="lastName"
                        value={student.lastName}
                        onChange={handleChange}
                        required />

                <p className="Registro">Email</p>
                    <input placeholder="Email" className="input" type="email"
                        id="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        required />

                <p className="Registro">Curso</p>
                    <input placeholder="Curso" className="input" type="text"
                        id="course"
                        name="course"
                        value={student.course}
                        onChange={handleChange}
                        required />

                <p className="Registro">Fecha de nacimiento</p>
                    <input placeholder="Fecha de nacimiento " className="input" 
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        value={student.birthDate}
                        onChange={handleChange}
                        required />

                <p className="Registro">Carnet</p>
                    <input placeholder="CI" className="input" 
                        type="text"
                        id="idCard"
                        name="idCard"
                        value={student.idCard}
                        onChange={handleChange}
                        required />

                <div className="Envio">
                    <button className="enviar" type="submit">Registra Estudiante</button>
                </div>
            </form>
        </>

    )
}
export default Registro;