import React, { Component } from 'react';
import {
  Button, Container, Form, Input,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';

class Bookmarks extends Component {

  render() {
    return (
      <Container>
        <div className="bg-info d-inline-block">
          <Form inline className="my-2 my-lg-0">
            <Input className="form-control mr-sm-2" type="text" placeholder="Search Bookmark" />
            <Button color="success">Search Bookmark</Button>
          </Form>
        </div>
      </Container>
    );
  }

}

export default Bookmarks;