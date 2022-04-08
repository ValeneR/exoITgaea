import React, {Component} from 'react';
import axios from 'axios';
import { Temporal } from '@js-temporal/polyfill';
    
class Client extends Component 
{
    constructor() {
        super();
        this.id = document.querySelector('#client').dataset.id;
        this.state = { client: {} };
    }
    
    componentDidMount() {
        this.getClient();
    }
    
    getClient() {
        axios.get(`http://localhost:8000/api/client/`+ this.id).then(client => {
           this.setState({ client: client.data });
       })
    }

    getAge(birthdate) {
        if (!birthdate) {
            return 0
        }

        const age = (Temporal.Now.instant().epochSeconds - (birthdate.timestamp))/60/60/24/365
        return Math.round(age)
    }

    render() {
        const client = this.state.client;
        const possessions = this.state.client.possessions;
        return (
            <div>
                <section className="row-section">
                    <div className="container">
                        <h2 className="text-center"><span>Fiche client</span></h2>
                        <div className="text-center" key={client.id}>
                            <h4>
                                {client.firstname} {client.name}
                            </h4>
                            <p>{this.getAge(client.birthdate)} ans</p>
                            <p>{client.adress}</p>
                            <p>Tel.: {client.phone}</p>
                            <p>E-mail: {client.email}</p>
                        </div>
                    </div>
                    <table className="table table-bordered table-hover table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Nom</th>
                                <th scope="col">Type</th>
                                <th scope="col">Valeur</th>
                            </tr>
                        </thead>
                        <tbody>
                            {possessions?.map(possession =>
                                <tr key={possession.id}>
                                    <td>{possession.name}</td>
                                    <td>{possession.type}</td>
                                    <td>{possession.value}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
}
    
export default Client;
