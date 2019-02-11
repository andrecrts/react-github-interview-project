import React from 'react';
import { Component } from 'react';
import './styles.css';
import axios from 'axios'
import { Table, Form, Button } from 'react-bootstrap';

class ComSearch1 extends Component {
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
              <td>{repo.clone_url}</td>
              <td>{repo.created_at}</td>
            </tr>
          )
        })
    }
    
    formHandler(e) {
        let state = this.state;
        let _form = this;
        axios.get('https://api.github.com/users/'+this.state.username+'/repos', this.state.username).then(function(response){
            console.log(response);            

            state.repos = [];

            response.data.forEach(_repo => {
                state.repos.push({
                    id: _repo.id,
                    name: _repo.name,
                    clone_url: _repo.clone_url,
                    created_at: _repo.created_at
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
            <div className="ComSearch1" >
                <Form sm="5">
                    <Form.Group controlId="formComSearch1">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control type="text" placeholder="Enter UserName" name="username" onChange={(e) => this.inputChangeHandler.call(this, e)}/>
                        <Form.Text className="text-muted">
                        Username that exist in GitHub.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="success" type="button" onClick={(e) => this.formHandler.call(this, e)}>
                    Search repository
                    </Button>
                </Form>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>User Name</th>
                        <th>Repository</th>
                        <th>Created At</th>
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

export default ComSearch1;
// export default connect(mapStateToProps, { showUsers })(ComSearch1)