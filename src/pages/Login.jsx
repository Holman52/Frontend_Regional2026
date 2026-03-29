import React, {useState} from 'react';
import Navigation from "../components/Navigation/Navigation.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const handleSubmit = async e => {
        e.preventDefault();
        try{

        } catch (error){

        } finally {

        }
    }
    return (
        <>
            <Navigation/>
                <div className="d-flex justify-content-center align-items-center bg-light main-container">
                    <div className="card p-4 shadow-sm" style={{margin: "300px"}}>
                        <h2 className="text-center mb-4">Авторизация</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="email" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Пароль" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Войти</button>
                        </form>
                    </div>
                </div>
            <Footer/>
        </>
    );
};

export default Login;