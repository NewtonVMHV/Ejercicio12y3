import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ComponentB from '../container/componentB';


const Contact = ({contact}) => {
    return (
        <div>
            <h2>Nombre: {contact.nombre}</h2>
            <h2>Apellidos: {contact.apellidos}</h2>
            <h2>Email: {contact.email}</h2>
            <ComponentB></ComponentB>
        </div>
    );
};


Contact.propTypes = {
    contact:PropTypes.instanceOf(Contacto)
};


export default Contact;
