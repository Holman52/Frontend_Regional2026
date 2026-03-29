import React, {useState} from 'react';
import Navigation from "../components/Navigation/Navigation.jsx";
import Footer from "../components/Footer/Footer.jsx";
import {useAuth} from "../context/UserContext.jsx";
import {apiLogin} from "../api/axios.js";


const Login = () => {
    const {loginContext} = useAuth()
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState({});
    console.log(error.email);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async e => {
        e.preventDefault();
        try{
            setLoading(true);
            await apiLogin(data)
            loginContext(data)
            setError({})
        } catch (error){
            setError(error.response.data.errors || error.response.data.error)
        } finally {
            setLoading(false);
        }
    }
    console.log(error)
    return (
        <>
            <Navigation/>
                <div className="d-flex justify-content-center align-items-center bg-light main-container">
                    <div className="card p-4 shadow-sm" style={{margin: "300px"}}>
                        <h2 className="text-center mb-4">Авторизация</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input type="email" className="form-control" name='email' placeholder="email"  onChange={(e) => setData({...data, [e.target.name]: e.target.value})} value={data.email}/>
                                {error.email && <div className={'form-text'}>{error.email}</div>}
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" name='password' placeholder="Пароль" onChange={(e) => setData({...data, [e.target.name]: e.target.value})} value={data.password}/>
                                {error.password && <div className={'form-text'}>{error.password}</div>}
                            </div>
                            {error && <div className="alert alert-danger" role="alert">
                                <i className="bi bi-exclamation-triangle me-2"></i>
                                {error}
                            </div>}
                            <button type="submit"
                                    className="btn btn-primary w-100">{loading ? 'Загрузка' : 'Войти'}</button>
                        </form>
                    </div>
                </div>
            <Footer/>
        </>
    );
};

export default Login;