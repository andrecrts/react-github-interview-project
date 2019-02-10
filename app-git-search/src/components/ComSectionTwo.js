import React from 'react';
import { Alert, Button, Form, Card, CardDeck } from 'react-bootstrap';
import './styles.css';
import logoGitHub3 from './img/img_git_logo_3.png';
import ComAside from './ComAside';

const ComSectionTwo = () => (
        <div className="ComSectionTwo">
            <CardDeck>
                <Card >
                    <Card.Img className="logoGitHub3" variant="top" src={logoGitHub3} />
                    <Card.Body>
                    <Card.Title>List repositories.</Card.Title>
                    <Card.Text>
                        <Alert variant="success">
                            <Alert.Heading>Search by name using github api and list repositories.</Alert.Heading>
                                <Form.Label>* Search by name:</Form.Label>
                                <Form.Control type="text" placeholder="Name GitHub" />
                                <Button variant="success" type="submit">Search</Button>
                            <hr />
                            <h6>* The name is required.</h6>
                        </Alert>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">
                        Repositories of HitHub <a href="https://github.com/">https://github.com/</a>
                    </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img className="logoGitHub3" variant="top" src={logoGitHub3} />
                    <Card.Body>
                    <Card.Title>List repositories.</Card.Title>
                    <Card.Text>
                        <Alert variant="primary">
                            <Alert.Heading>Search by Username using github api and list repositories.</Alert.Heading>
                                <Form.Label>* Search by Username:</Form.Label>
                                <Form.Control type="text" placeholder="Username GitHub" />
                                <Button variant="primary" type="submit">Search</Button>
                            <hr />
                            <h6>* The Username is required.</h6>
                        </Alert>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">
                        Repositories of HitHub <a href="https://github.com/">https://github.com/</a>
                    </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img className="logoGitHub3" variant="top" src={logoGitHub3} />
                    <Card.Body>
                    <Card.Title>List repositories.</Card.Title>
                    <Card.Text>
                        <Alert variant="warning">
                            <Alert.Heading>Search by bookmarked repositories.</Alert.Heading>
                                <Form.Label>* Search by Bookmarked:</Form.Label>
                                <Form.Control type="text" placeholder="Bookmarked Repository GitHub" />
                                <Button variant="warning" type="submit">Search</Button>
                            <hr />
                            <h6>* The Bookmarked is required.</h6>
                        </Alert>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">
                        Repositories of HitHub <a href="https://github.com/">https://github.com/</a>
                    </small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br/>
            <ComAside/>
        </div>
);

export default ComSectionTwo;
