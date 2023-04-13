import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../firebase/AuthContext";

export function Login(){

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { login, loginWithGoogle, resetPassword } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(user.email, user.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) return setError("Write an email to reset password");
        try {
            await resetPassword(user.email);
            setError('We sent you an email. Check your inbox')
        } catch (error) {
            setError(error.message);
        }
    };


    return (
        <>
            <section >
                <form onSubmit={handleSubmit}>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="box">
                        <div class="square" style={{ '--i': '0' }}></div>
                        <div class="square" style={{ '--i': '1' }}xc></div>
                        <div class="square" style={{ '--i': '1' }}></div>
                        <div class="square" style={{ '--i': '3' }}></div>
                        <div class="square" style={{ '--i': '4' }}></div>
                    <div class="container">
                        <div class="from">
                                <h2 className="Inicio">Iniciar</h2>
                            <form>
                                <div class="inputBox">
                                    <input type="text" placeholder="Usuario" onChange={handleChange} />
                                </div>
                                <div class="inputBox">
                                    <input type="password" placeholder="Contraseña" onChange={handleChange} />
                                </div>
                                <div class="inputBox">
                                        <input type="submit" value="Iniciar" onClick={() => navigate('/registro')} />
                                </div>
                                    <p className="forget" onClick={handleResetPassword}>¿Olvidaste tu contraseña?</p>
                                <p className="forget">¿No tienes una cuenta? </p>
                            </form>
                            <div>
                                <button onClick={handleGoogleSignin}>
                                        <img src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png" alt="Google logo" />
                                        
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </section>
        </>
    )
}
export default Login;