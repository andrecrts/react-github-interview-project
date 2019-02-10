import React, { Component } from 'react';
import {
  Button, Container, Form, Input,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';

class UsersSearch extends Component {

  render() {
    return (
      <Container>
        <div className="bg-info d-inline-block">
          <Form inline className="my-2 my-lg-0">
            <Input className="form-control mr-sm-2" type="text" placeholder="Search Users" />
            <Button color="success">Search Users</Button>
          </Form>
        </div>
      </Container>
    );
  }

}

export default UsersSearch;