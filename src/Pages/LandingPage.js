import React from 'react';
import '../App.css';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import Banner from '../Componentes/Banner';

const LandingPage = () => {
    const isAuthenticated = false;

    return (
        <div>
            <Header isAuthenticated={isAuthenticated} />
            <Banner />
            <Footer />
        </div>
    );
};

export default LandingPage;