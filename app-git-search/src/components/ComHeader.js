import React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import './styles.css';
import logoGit from './img/img_git_logo.png';
import { faIgloo } from '/bootstrap/@fontawesome/free-solid-svg-icons';
const ComHeader = () => (
        <div>
            <img className="logoGit" src={logoGit} height="100" width="100" alt="logo" /> 
            <h1>GitHub Developer!</h1>
            <p>
                1. Search by name using github api and list repositories.
                2. Search username repositories and list them.
                3. Bookmark repositories.
                4. Page to list bookmarked repositories.
                5. Search bookmarked repositories.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
            <Alert variant="secondary">
                <Alert.Heading>Search by name using github api and list repositories.</Alert.Heading>
                <p>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice
                    and tidy.
                    <li className="list-group-item">
                        <i className={faIgloo}></i>
                        <i className={faIgloo}></i>
                    </li>
                </p>
            </Alert>
        </div>
);

export default ComHeader;