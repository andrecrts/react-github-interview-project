import React from 'react';
import { Component } from 'react';
import './styles.css';
import axios from 'axios';
import { Table, Form, Button } from 'react-bootstrap';

class ComSearch3 extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            repos: [ ]
        };
    }

    renderUserList() {
        return this.state.repos.map((repo) =>{
          return (
            <tr key={repo.id}>
              <td>{repo.id}</td>
              <td>{repo.name}</td>
              <td>{repo.private}</td>
              <td>{repo.clone_url}</td>
            </tr>
          )
        })
    }

    formHandler(e) {
        let state = this.state;
        let _form = this;
        axios.get('https://api.github.com/users/'+this.state.starred+'/starred', this.state.starred).then(function(response){
        console.log(response);            

            state.repos = [];

            response.data.forEach(_repo => {
                state.repos.push({
                    id: _repo.id,
                    name: _repo.name,
                    private: _repo.private.toString(),
                    clone_url: _repo.clone_url
                })
            });
            
            // for (let _i = 0; _i < response.data.length; _i++) {
            //     const element = response[_i];
            //     console.log(element);
                
            // }

            _form.setState({
                state
            });
        }).catch(function(error){
            console.error(error);
            //Perform action based on error
        });
    }

    inputChangeHandler(e) {
        let state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({
            state
        });
        // console.log(this.state);
    }

    render() {
        return (
            <div className="ComSearch3" >
                <Form>
                    <Form.Group controlId="formComSearch3">
                        <Form.Label>Starred repository per username:</Form.Label>
                        <Form.Control type="text" placeholder="Enter UserName" name="starred" onChange={(e) => this.inputChangeHandler.call(this, e)}/>
                        <Form.Text className="text-muted">
                        Username that exist in GitHub.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="warning" type="button" onClick={(e) => this.formHandler.call(this, e)}>
                    Search repository
                    </Button>
                </Form>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>User Name</th>
                        <th>Is Private</th>
                        <th>Url to Clone</th>
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

// function mapStateToProps(state) {
//     return {
//       users: state.user.list
//     }
// }

export default ComSearch3;
// export default connect(mapStateToProps, { showUsers })(ComSearch1)