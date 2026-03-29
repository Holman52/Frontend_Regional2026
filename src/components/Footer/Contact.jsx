import React from 'react';
import {NavLink} from "react-router-dom";


const Contact = () => {
    return (
            <NavLink to='/'  className={`col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0  me-md-auto link-body-emphasis text-decoration-none`}>
            <p className="col-md-4 mb-0 text-primary">Телефон +79108008080</p>
        </NavLink>
    );
};

export default Contact;