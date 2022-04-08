import React from 'react';
import '../styles/app.css';

export default function Modal (props) {

    return (
        <div className="modal" style={{ 
            opacity: props.visible ? '1' : '0'
        }}>
            <button onClick={props.hide}>X</button>
            <button className="close" onClick={props.hide}>X</button>
            <div className="form">
                <div>
                    <label htmlFor="name">Nom</label>
                    <input type="text" value="name" id="name" nom="name"/>
                </div>
                <div>
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" value="firstname" id="firstname" nom="firstname"/>
                </div>
                <div>
                    <label htmlFor="adress">Adressse</label>
                    <input type="text" value="adress" id="adress" nom="adress"/>
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" value="email" id="email" nom="email"/>
                </div>
                <div>
                    <label htmlFor="phone">Téléphone</label>
                    <input type="text" value="phone" id="phone" nom="phone"/>
                </div>
                <div>
                    <label htmlFor="birthdate">Date de naissance</label>
                    <input type="date" value="birthdate" id="birthdate" nom="birthdate"/>
                </div>
                <button className="btn btn-default">Valider</button>
            </div>
        </div>
    )
}
