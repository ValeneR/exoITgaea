import React, { Component } from 'react';
import '../styles/app.css';
import Modal from './Modal';

export default class Button extends Component {

    state = {
        visible: false
    }

    showModal = () => {
        this.setState ({
            visible: true
        })
        console.log('its ok')
    }

    hideModal = () => {
        this.setState ({
            visible: false
        })
    }

    render () {
        return (
        <div>
            <Modal 
                visible={this.state.visible}
                hide={this.hideModal}
            />
            <button className="btn btn-default col-12" onClick={this.showModal}>Ajouter un utilisateur</button>
            {/* <Modal 
                visible={this.state.visible}
                hide={this.hideModal}
            /> */}
        </div>
        )
    }
}
