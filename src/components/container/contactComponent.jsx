import React from 'react';
import { Contacto } from '../../models/contacto.class';
import Contact from '../pure/contact';

const ContactComponent = () => {

    const defaultContact = new Contacto('Victor Manuel', 'Hernandez Vargas','vargasvictor635@outlook.com',false)

    return (
        <div>
            <Contact contact = {defaultContact}></Contact>   
        </div>
    );
};

export default ContactComponent;
