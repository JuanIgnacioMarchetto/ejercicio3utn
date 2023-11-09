import React from "react";

const BarraLateral = ({ setCurrentImage, imagenes }) => {

    function manejarClick(imagen) {
        setCurrentImage(imagen);
    }

    return (
    
        imagenes.map(imagen => (
            <div className="" key={imagen}>
                <img className={`rounded mx-auto d-block mt-3`} src={imagen} height='100' style={{ cursor: 'pointer' }} onClick={() => manejarClick(imagen)} />
            </div>
        ))
    
    );
};

export default BarraLateral;
