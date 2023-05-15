import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ComponentB = ({status}) => {
    const [conectado,setConectado] = useState(status)
    return (
        <div>
            {(conectado)? 'Contacto En Linea':'Contacto No Disponible'}
            <button onClick={() => setConectado(!conectado)}>{conectado === false ?  'Conectado':'Desconectado'}</button>
        </div>
    );
};


ComponentB.propTypes = {
    status: PropTypes.bool,
};


export default ComponentB;
