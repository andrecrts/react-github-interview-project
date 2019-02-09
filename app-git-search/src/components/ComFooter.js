import React from 'react';
import { Card } from 'react-bootstrap';
import './styles.css';
import logoYalo from './img/img_yalo_logo.png';

const ComFooter = () => (
    <div className="ComFooter">
        <Card>
            <Card.Header>
                Send useful notifications - Main Features - Handle customer relationships using AI
            </Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    Create one-on-one relationships at scale where your customers.{' '}
                    <img src={logoYalo} height="100" width="200" alt="yalochat" /> 
                </p>
                <footer className="blockquote-footer">
                    Developed by <cite title="Rubén López">Rubén López</cite> 
                </footer>
                </blockquote>
            </Card.Body>
        </Card>
    </div>
);

export default ComFooter;