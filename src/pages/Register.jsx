import React, {useState} from 'react';
import Navigation from "../components/Navigation/Navigation.jsx";
import Footer from "../components/Footer/Footer.jsx";
import {useAuth} from "../context/UserContext.jsx";
import {apiRegister} from "../api/axios.js";


const Register = () => {
    const {loginContext} = useAuth()
    const [data, setData] = useState({
        email: '',
        password: '',
        name:''
    });
    const [error, setError] = useState({});
    console.log(error.email);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async e => {
        e.preventDefault();
        try{
            setLoading(true);
            await apiRegister(data)
            loginContext(data)
            setError({})
        } catch (error){
            console.log(error.response.data.errors)
            setError(error.response.data.errors)
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <Navigation/>
            <div className="d-flex justify-content-center align-items-center bg-light main-container">
                <div className="card p-4 shadow-sm" style={{width: "400px"}}>
                    <h2 className="text-center mb-4">Регистрация</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="email" className="form-control" name='email' placeholder="Email" onChange={(e) => setData({...data, [e.target.name]: e.target.value})} value={data.email}/>
                            {error.email && <div className={'form-text'}>{error.email}</div>}
                        </div>
                        <div className="mb-3">
                            <input type="text" name='name' className="form-control" onChange={(e) => setData({...data, [e.target.name]: e.target.value})} placeholder="Имя" value={data.name}/>
                            {error.name && <div className={'form-text'}>{error.name}</div>}
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" name='password' placeholder="Пароль" onChange={(e) => setData({...data, [e.target.name]: e.target.value})} value={data.password}/>
                            {error.password && <div className={'form-text'}>{error.password}</div>}
                        </div>

                        <button type="submit" className="btn btn-primary w-100">{loading ? 'Загрузка' : 'Зарегистрироваться'} </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Register;