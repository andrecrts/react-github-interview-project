import React, { Component } from 'react';
import {
  Card, CardBlock, CardSubtitle, CardText, CardTitle, Container,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';

class UserList extends Component {
  render() {
    const { users } = this.props;
    let listItems = [];
    if (users) {
      listItems = users.map(repo => (
        <Card width="100%">
          <CardBlock>
            <CardTitle>{repo.full_name}</CardTitle>
            <CardSubtitle>
              Language:
              {repo.language}
            </CardSubtitle>
            <CardText>{repo.description}</CardText>
          </CardBlock>
        </Card>
      ));
    }

    return (
      <Container>
        <ul>{listItems}</ul>
      </Container>
    );
  }
}

export default UserList;
