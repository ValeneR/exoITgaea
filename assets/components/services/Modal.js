import React from 'react';
import './Modal.css';

const Modal = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Ajouter un client</h4>
                </div>
                <div className="modal-body">
                    <div className="form">
                        <div>
                            <label htmlFor="name">Nom : </label>
                            <input type="text" id="name" nom="name"/>
                        </div>
                        <div>
                            <label htmlFor="firstname">Prénom : </label>
                            <input type="text" id="firstname" nom="firstname"/>
                        </div>
                        <div>
                            <label htmlFor="adress">Adressse : </label>
                            <input type="text" id="adress" nom="adress"/>
                        </div>
                        <div>
                            <label htmlFor="email">E-mail : </label>
                            <input type="text" id="email" nom="email"/>
                        </div>
                        <div>
                            <label htmlFor="phone">Téléphone : </label>
                            <input type="text" id="phone" nom="phone"/>
                        </div>
                        <div>
                            <label htmlFor="birthdate">Date de naissance : </label>
                            <input type="date" id="birthdate" nom="birthdate"/>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-default">Enregistrer</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;