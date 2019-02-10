import React, { Component } from 'react';
import {
  Button, Card, CardBlock, CardSubtitle, CardText, CardTitle, Container, Form, Input,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';

class UsersSearch extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { repos } = this.props;
    const listItems = repos.map(repo => (
      <Card width="50%">
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{JSON.stringify(repo)}</CardText>
          <Button color="primary">Go somewhere</Button>
        </CardBlock>
      </Card>
    ));
    return (
      <Container>
        <ul>{listItems}</ul>
      </Container>
    );
  }

}

export default UsersSearch;