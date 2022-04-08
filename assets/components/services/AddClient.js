import React, {Component, useState} from 'react';
import Modal from 'Modal';

class AddClient extends Component {

    constructor (props) {
        super (props)
        this.state = {
            name: '',
            firstname: '',
            adress: '',
            email: '',
            phone:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const name = e.target.names
        const firstname = e.target.firstnames
        const adress = e.target.adresses
        const email = e.target.emails
        const phone = e.target.phones
    }

    /* const [show, setShow] = useState (false); */

    render() {
        return (
            <div className="Modal">
                <button className="btn btn-default col-12" onClick={() => setShow(true)}>Ajouter un utilisateur</button>
                <Modal title="Inscription" onClose={() => setSHow(false)} onSubmit={(e) => this.addClient(client.id, e)} show={show}>
                    <div>
                        <label htmlFor="name">Nom</label>
                        <input type="text" value={this.state.name} onChange={this.handleChange} id="name" nom="name"/>
                    </div>
                    <div>
                        <label htmlFor="firstname">Prénom</label>
                        <input type="text" value={this.state.firstname} onChange={this.handleChange} id="firstname" nom="firstname"/>
                    </div>
                    <div>
                        <label htmlFor="adress">Adressse</label>
                        <input type="text" value={this.state.adress} onChange={this.handleChange} id="adress" nom="adress"/>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" value={this.state.email} onChange={this.handleChange} id="email" nom="email"/>
                    </div>
                    <div>
                        <label htmlFor="phone">Téléphone</label>
                        <input type="text" value={this.state.phone} onChange={this.handleChange} id="phone" nom="phone"/>
                    </div>
                    <button className="button"  onClick={props.onSubmit}>Valider</button>
                    {JSON.stringify(this.state)}
                </Modal>
            </div>
        )
    }
}
