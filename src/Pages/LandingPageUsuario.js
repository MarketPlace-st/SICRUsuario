import React from 'react';
import '../App.css';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import Banner from '../Componentes/Banner';
import SolicitudPendiente from '../Componentes/SolicitudPendiente';

const LandingPageUsuario = () => {
    const isAuthenticated = true;

    // Datos de las solicitudes definidos localmente
    const solicitudesPendientes = [
        {
            id: 1,
            numero: "001",
            nombreEstablecimiento: "Distribuidora del norte",
            estado: "pendiente"
        },
        {
            id: 2,
            numero: "002",
            nombreEstablecimiento: "Matadero La Esperanza",
            estado: "rechazado"
        },
        {
            id: 3,
            numero: "003",
            nombreEstablecimiento: "Distribuidora del Sur",
            estado: "pendiente"
        }
    ];

    const handleSolicitudClick = (solicitud) => {
        console.log('Solicitud seleccionada:', solicitud);
    };

    return (
        <div>
            <Header isAuthenticated={isAuthenticated} />
            <Banner />
            <div className="dashboard-container">
                <SolicitudPendiente 
                    solicitudes={solicitudesPendientes}
                    showTitle={true}
                    onRowClick={handleSolicitudClick}
                    isLoading={false}
                />
            </div>
            <Footer />
        </div>
    );
};

export default LandingPageUsuario;