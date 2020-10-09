import React from 'react';
import './styles.css';
import { Jumbotron, Container } from 'react-bootstrap';

const ComHeader = () => (
        <div className="ComHeader">
            <Jumbotron fluid>
                <Container>
                    <h1>GitHub Developer!</h1>
                    <p>
                    This application can help you select and search a repository by name and username. In addition to this it gives the option to mark it.
                    By checking it, you can perform a search of the repositories in an easier way.
                    </p>
                </Container>
            </Jumbotron>
        </div>
);

export default ComHeader;