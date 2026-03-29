import React from 'react';
import Contact from "./Contact.jsx";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../context/UserContext.jsx";

const Footer = () => {
    const location = useLocation();
    const contactUrl = ['/public-board', '/private-board', /^\/board\/\d+$/];
    const showContact = contactUrl.includes(location.pathname);
    const {user, logoutContext} = useAuth()
    console.log(location);
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login')
        return logoutContext()
    }

    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

            <p className="col-md-4 mb-0 text-primary">&copy; CollabBoard</p>

            {
                showContact &&  <Contact/>

            }

            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><NavLink to={'/public'} className={ ({isActive}) => `${isActive ? '' : 'text-body-secondary'} nav-link px-2`}>Публичные
                    доски</NavLink></li>
                <li className="nav-item"><NavLink to={'/user/boards'} className={ ({isActive}) => `${isActive ? '' : 'text-body-secondary'} nav-link px-2`}>Моя
                    доска</NavLink></li>
                {
                    !user  && <li className="nav-item"><NavLink  to={'/register'} className={ ({isActive}) => `${isActive ? '' : 'text-body-secondary'} nav-link px-2`}>Регистрация</NavLink></li>
                }
                {
                    user ? <li className="nav-item"><NavLink to={'/logout'} className={ ({isActive}) => `${isActive ? '' : 'text-body-secondary'} nav-link px-2`}onClick={handleLogout}>Выйти</NavLink></li> :
                        <li className="nav-item"><NavLink to={'/login'} className={ ({isActive}) => `${isActive ? '' : 'text-body-secondary'} nav-link px-2`}>Войти</NavLink></li>

                }
            </ul>
        </footer>
    );
};

export default Footer;