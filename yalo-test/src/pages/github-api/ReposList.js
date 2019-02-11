import React, { Component } from 'react';
import {
  Button,
  Card, CardBlock, CardSubtitle, CardText, CardTitle, Container,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';
import { connect } from 'react-redux';
import { actions } from '../../actions/bookmark-actions';

class ReposList extends Component {
  constructor(props) {
    super(props);
    this.addToBookMark = this.addToBookMark.bind(this);
    this.removeBookMark = this.removeBookMark.bind(this);
  }

  addToBookMark(repo) {
    const { addBookMark } = this.props;
    addBookMark({ data: repo });
  };

  removeBookMark(repo) {
    const { removeBookMark } = this.props;
    removeBookMark({ data: repo });
  };

  render() {
    const { repos, bookmarkReducer: { bookmarks } } = this.props;
    console.log(this.props);
    let listItems = [];
    if (repos) {
      listItems = repos.map(repo => (
        <Card width="100%" key={repo.id}>
          <CardBlock>
            <CardTitle>{repo.full_name}</CardTitle>
            <CardSubtitle>
              Language:
              {repo.language}
            </CardSubtitle>
            <CardText>{repo.description}</CardText>
            <Button
              color="primary"
              onClick={
                bookmarks[repo.id] ? () => this.removeBookMark(repo) : () => this.addToBookMark(repo)
              }
            >
              {bookmarks[repo.id] ? 'Quitar Favorito' : 'Agregar Favorito'}
            </Button>
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

const mapDispatchToProps = dispatch => (
  {
    addBookMark: (item) => {
      dispatch(actions.createBookMark(item));
    },
    removeBookMark: (item) => {
      dispatch(actions.deleteBookMark(item));
    },
  }
);


export default connect(state => state, mapDispatchToProps)(ReposList);
