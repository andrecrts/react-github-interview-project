import React, { Component } from 'react';
import {
  Button, Container, Form, Input,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';
import { connect } from 'react-redux';
import ReposList from './github-api/ReposList';

class Bookmarks extends Component {

  constructor(props) {
    super(props);

    const { bookmarkReducer: { bookmarks } } = this.props;
    const arrayBookmarks = Object.keys(bookmarks).map(key => bookmarks[key]);

    this.state = {
      value: '',
      arrayBookmarks,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { value, arrayBookmarks } = this.state;
    event.preventDefault();
    if (value) {
      const filteredArray = arrayBookmarks.filter(repo => repo.full_name.search(value) !== -1);
      this.setState({ arrayBookmarks: filteredArray });
    } else {
      const { bookmarkReducer: { bookmarks } } = this.props;
      const allBookmarks = Object.keys(bookmarks).map(key => bookmarks[key]);
      this.setState({ arrayBookmarks: allBookmarks });
    }
  }

  render() {
    const { value, arrayBookmarks } = this.state;

    let element;

    if (arrayBookmarks.length > 0) {
      element = <ReposList repos={arrayBookmarks} />;
    } else if (value) {
      element = <h3>Bookmark no encontrado</h3>;
    } else {
      element = <h3>No has agregado bookmarks</h3>;
    }

    return (
      <Container>
        <div className="d-inline-block">
          <Form inline className="my-2 my-lg-0" onSubmit={this.handleSubmit}>
            <Input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search Bookmark"
              value={value}
              onChange={this.handleChange}
            />
            <Button color="success">Search Bookmark</Button>
          </Form>
        </div>
        {element}
      </Container>
    );
  }
}

export default connect(state => state, {})(Bookmarks);
