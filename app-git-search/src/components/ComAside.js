import React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import './styles.css';

const ComAside = () => (
        <div className="ComSectionTwo">
            <Alert variant="secondary">
                <Alert.Heading>Resultados de la busqueda:</Alert.Heading>
                    <Form.Label>* Search by Bookmarked:</Form.Label>
                    <Form.Control type="text" placeholder="Bookmarked Repository GitHub" />
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="warning" type="submit">Search</Button>
                <hr />
                <h6>* The Bookmarked is required.</h6>
            </Alert>
        </div>
);

export default ComAside;
