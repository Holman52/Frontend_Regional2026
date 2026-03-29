import React from 'react';
import {NavLink,  useNavigate} from "react-router-dom";
import {useAuth} from "../../context/UserContext.jsx";



const Navigation = () => {
    const {user, logoutContext} = useAuth()
    console.log(location);
   const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login')
        return logoutContext()
    }
    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/"
               className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi me-2" width="40" height="32">
                    <use xlinkHref="#bootstrap"/>
                </svg>
                <span className="fs-4">CollabBoard</span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><NavLink to={'/public-board'}  className="nav-link">Публичные доски</NavLink></li>
                <li className="nav-item"><NavLink to={'/private-board'}  className="nav-link">Моя доска</NavLink></li>
                <li className="nav-item"><NavLink to={'/register'} className="nav-link" >Регистрация</NavLink></li>
                {
                    user ? <li className="nav-item"><NavLink to={'/logout'} className="nav-link" onClick={handleLogout}>Выйти</NavLink></li> :
                        <li className="nav-item"><NavLink to={'/login'} className="nav-link">Войти</NavLink></li>
                }
            </ul>
        </header>

    );
};

export default Navigation;