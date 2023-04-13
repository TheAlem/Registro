import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home } from './Components/Home/Index';
import { Registro } from './Components/Home/Registro.js';
import { Estudiante } from "./Components/Home/Estudiante.js";
import { Contacto } from "./Components/Home/Contacto.js";
import {Login} from "./routes/Login.js";
import { AuthProvider } from "./firebase/AuthContext";


const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Estudiante" element={<Estudiante />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
