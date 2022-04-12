import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';

function MyModal (props) {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const handleSubmit = event => {
    setName(''); 
    setFirstname('') ;
    setEmail('');  
    setAdress('');  
    setPhone('');
    setBirthdate('');
    
    axios.post('/api/add', {
      name: name,
      firstname: firstname,
      email: email,
      adress: adress,
      phone: phone,
      birthdate: birthdate
    })
  }

  return (
    <Modal
      {...props}
      keyboard={false}
    >

      <Modal.Header closeButton>
        <Modal.Title >
          Ajouter un client
        </Modal.Title>
      </Modal.Header>

      <Modal.Body > 
        <Form className="modal-body" onSubmit = { handleSubmit }>
          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="name" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="firstname" placeholder="Prénom" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicemail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Adresse</Form.Label>
            <Form.Control type="text" placeholder="Adresse" value={adress} onChange={(e) => setAdress(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control type="phone" placeholder="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date de naissance</Form.Label>
            <Form.Control type="date" placeholder="Date de naissance" value={birthdate} onChange={(e) => setBirthdate(e.target.value)}/>
          </Form.Group>
        
          <Button variant="btn btn-default" type="submit">Valider</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default MyModal;
