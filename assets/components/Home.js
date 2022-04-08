import React, {Component } from 'react';
import axios from 'axios';
import { Temporal } from '@js-temporal/polyfill';
import Button from './Button';
    
class Home extends Component 
{
    constructor(propos) {
        super();
        this.state = { clients: [] };
    }
    
    componentDidMount() {
        this.getClients();
    }
    
    getClients() {
       axios.get(`http://localhost:8000/api/clients`).then(clients => {
           this.setState({ clients: clients.data });
       })
    }

    removeClient(id, e) {
        axios.delete(`http://localhost:8000/api/remove/`+ id)
            .then(() =>  
                window.location.reload(true)
            )
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    getAge(birthdate) {
        if (!birthdate) {
            return 0
        }

        const age = (Temporal.Now.instant().epochSeconds - (birthdate.timestamp))/60/60/24/365
        return Math.round(age)
    }

    render() {
        const clients = this.state.clients;

        return (
            <div>
                <section className="row-section">
                    <div className="container">
                        <h2 className="text-center"><span>Liste des clients</span></h2>
                    </div>
                    <table className="table table-bordered table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col-1">Id</th>
                                <th scope="col-2">Nom</th>
                                <th scope="col-2">Prénom</th>
                                <th scope="col-2">Adresse</th>
                                <th scope="col-2">E-mail</th>
                                <th scope="col-1">Tel.</th>
                                <th scope="col-1">Age</th>
                                <th scope="col-1"></th>
                            </tr>
                        </thead>
                        <tbody>
                            { clients.map(client =>
                                <tr key={client.id}>
                                    <td>{client.id}</td>
                                    <td><a className="client-href" href={"/client/"+client.id}>{client.name}</a></td>
                                    <td>{client.firstname}</td>
                                    <td>{client.adress}</td>
                                    <td>{client.email}</td>
                                    <td>{client.phone}</td>
                                    <td>{this.getAge(client.birthdate)}</td>
                                    <td><a className="btn btn-default" onClick={(e) => this.removeClient(client.id, e)}>Supprimer</a></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="row align-items-center">
                        <Button />
                    </div>
                </section>
            </div>
        )
    }
}
    
export default Home;
