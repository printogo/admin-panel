import React from 'react';
import '../scss/Loader.scss';

const Loader = ({ isLoading }) => {
    if (!isLoading) return null; // Si no está cargando, no renderiza nada
    return (
        <div className="loader-overlay">
            <div className="loader"></div>
        </div>
    );
};

export default Loader;