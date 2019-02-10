import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './styles.css';
import logoGit from './img/img_git_logo.png';

const ComSectionOne = () => (
        <div className="ComSectionOne">
            <Carousel>
            <Carousel.Item>
                <img className="logoGit" src={logoGit} height="200" width="200" alt="GitHub" />
                <Carousel.Caption>
                <h3>1. Search by name using github api and list repositories.</h3>
                <p>You can perform a search for ropositories if you know the name, click on the button so that it can show you the search result !!.</p>
                <Button variant="success">Press me</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="logoGit" src={logoGit} height="200" width="200" alt="GitHub" />
                <Carousel.Caption>
                <h3>2. Search username repositories and list them.</h3>
                <p>You can perform a search for ropositories if you know the <b>Username</b>, click on the button so that it can show you the search result !!.</p>
                <Button variant="primary">Press me</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="logoGit" src={logoGit} height="200" width="200" alt="GitHub" />
                <Carousel.Caption>
                <h3>3. Bookmark repositories, Search bookmarked repositories.</h3>
                <p>You can perform a search for ropositories that have been marked, click on the button so that it can show you the search result !!..</p>
                <Button variant="warning">Press me</Button>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
);

export default ComSectionOne;
