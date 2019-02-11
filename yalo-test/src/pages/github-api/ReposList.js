import React, { Component } from 'react';
import {
  Button,
  Card, CardBlock, CardSubtitle, CardText, CardTitle, Container,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';

class ReposList extends Component {
  addToBookMark(repo) {
    console.log(repo);
  }

  render() {
    const { repos } = this.props;
    let listItems = [];
    if (repos.items) {
      const { items } = repos;
      listItems = items.map(repo => (
        <Card width="100%">
          <CardBlock>
            <CardTitle>{repo.full_name}</CardTitle>
            <CardSubtitle>
              Language:
              {repo.language}
            </CardSubtitle>
            <CardText>{repo.description}</CardText>
            <Button color="primary" onClick={this.addToBookMark(repo)}>AddFavorite</Button>
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

export default ReposList;
