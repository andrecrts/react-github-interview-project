import React, { Component } from 'react';
import {
  Button, Container, Form, Input,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';
import { getUserRepos } from '../../services/git-api';
import UserList from './UserList';

class UsersSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchResults: [],
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { value } = this.state;
    event.preventDefault();
    getUserRepos(value).then((result) => {
      this.setState({ searchResults: result, error: null });
    }, (error) => {
      this.setState({ error });
    });
  }

  render() {
    const { value } = this.state;
    const { searchResults } = this.state;
    const { error } = this.state;

    let element;

    if (error) {
      const { message } = error;
      element = <h3>{message}</h3>;
    } else {
      element = <UserList users={searchResults} />;
    }


    return (
      <Container>
        <div className="d-inline-block">
          <Form inline className="my-2 my-lg-0" onSubmit={this.handleSubmit}>
            <Input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search Users"
              value={value}
              onChange={this.handleChange}
            />
            <Button color="success">Search Users</Button>
          </Form>
        </div>
        <div id="list">
          {element}
        </div>
      </Container>
    );
  }
}

export default UsersSearch;
