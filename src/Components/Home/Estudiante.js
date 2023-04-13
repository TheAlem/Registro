import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase';


export const Estudiante = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [students, setStudents] = useState([]);
    const [searchResults, setSearchResults] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            const studentsRef = db.collection('students');
            const snapshot = await studentsRef.get();
            const studentsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setStudents(studentsData);
        };
        fetchStudents();
    }, []);

    const handleSearch = () => {
        if (searchTerm === '') {
            setSearchResults(null);
        } else {
            const filteredStudents = students.filter((student) =>
                `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(filteredStudents);
        }
    };

    const studentsToDisplay = searchResults === null ? students : searchResults;

        
    return (
        <>
            <div className="App">
                <div className="listaentera">
                    <p className="titulo">Buscador de Estudiante</p>

                    <div>
                        <ul className="mi-lista">
                            <li><Link  className="no-link-style" to="/">Inicio</Link></li>
                            <li><Link  className="no-link-style" to="/Registro">Registro</Link></li>
                            <li><Link  className="no-link-style" to="/Estudiante">Estudiante</Link></li>
                            <li><Link  className="no-link-style" to="/Contacto">Contacto</Link></li>
                        </ul>
                    </div>
                </div>


                <input className="input"
                    type="text"
                    placeholder="Buscar estudiantes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                    <button onClick={handleSearch}>Buscar</button>
                
                <ul>
                    {studentsToDisplay.map((student) => (
                        <p className='Porfin' key={student.id}>
                            {student.firstName} {student.lastName} - {student.email} - {student.course} - {student.birthDate} - {student.idCard}
                        </p>
                    ))}
                </ul>
            </div>

            <div>

            </div>
        </>
    )
}

export default Estudiante;