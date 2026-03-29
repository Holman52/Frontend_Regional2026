import React from 'react';
import {Navigate} from "react-router-dom";
import Navigation from "../components/Navigation/Navigation.jsx";
import Footer from "../components/Footer/Footer.jsx";

const PublicBoard = () => {
    return (
        <>
            <Navigation/>
            <Cards>
            <Footer/>
        </>
    );
};

export default PublicBoard;