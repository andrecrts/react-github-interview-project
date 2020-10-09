import React from 'react';
import { Component } from 'react';
import './styles.css';
import axios from 'axios'
import { Table, Form, Button } from 'react-bootstrap';

class ComSearch2 extends Component {
    constructor() {
        super();
        this.state = {
            repository: '',
            repos: [ ]
        };
    }

    renderUserList() {
        return this.state.repos.map((repo) =>{
          return (
            <tr key={repo.id}>
              <td>{repo.id}</td>
              <td>{repo.name}</td>
              <td>{repo.language}</td>
              <td>{repo.forks_count}</td>
            </tr>
          )
        })
    }

    formHandler(e) {
        let state = this.state;
        let _form = this;
        axios.get('https://api.github.com/search/repositories?q='+this.state.repository, this.state.repository).then(function(response){
            console.log(response);            

            state.repos = [];

            response.data.items.forEach(_repo => {
                state.repos.push({
                    id: _repo.id,
                    name: _repo.name,
                    language: _repo.language,
                    forks_count: _repo.forks_count
                })
            });
            

            _form.setState({
                state
            });
        }).catch(function(error){
            console.error(error);
        });
    }

    inputChangeHandler(e) {
        let state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({
            state
        });
    }

    render() {
        return (
            <div className="ComSearch2" >
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Repository</Form.Label>
                        <Form.Control type="text" placeholder="Enter Repository" name="repository" onChange={(e) => this.inputChangeHandler.call(this, e)}/>
                        <Form.Text className="text-muted">
                        Repository that exist in GitHub.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={(e) => this.formHandler.call(this, e)}>
                    Search repository's
                    </Button>
                </Form>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>User Name</th>
                        <th>Languaje</th>
                        <th>Forks Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderUserList() }
                    </tbody>
                </Table>
            </div>
        )
    }

}

export default ComSearch2;