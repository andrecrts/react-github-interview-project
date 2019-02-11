import React, { Component } from 'react';
import {
  Button, Container, Form, Input,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';
import ReposList from './ReposList';
import { search } from '../../services/git-api';

class ReposSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchResults: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    const { value } = this.state;
    event.preventDefault();
    const result = await search(value);
    this.setState({ searchResults: result });
  }

  render() {
    const { value } = this.state;
    const { searchResults } = this.state;
    return (
      <Container>
        <div className="d-inline-block">
          <Form inline className="my-2 my-lg-0" onSubmit={this.handleSubmit}>
            <Input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search Repos"
              value={value}
              onChange={this.handleChange}
            />
            <Button color="success">Search Repos</Button>
          </Form>
        </div>
        <div id="list">
          <ReposList repos={searchResults} />
        </div>
      </Container>
    );
  }
}

export default ReposSearch;
