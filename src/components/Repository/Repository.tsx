import moment from 'moment';
import React, { memo, useCallback } from 'react';
import {
  Button, Card, Col, Row,
} from 'react-bootstrap';
import { BookmarkFill, BookmarkPlus, Star } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createBookmarkAction, deleteBookmarkAction } from '../../actions/bookmark';
import { RepositoryType } from '../../types/repository';

export interface RepositoryProps {
  repository: RepositoryType;
  bookmarked?: boolean;
}

const CardContent = styled(Card)`
  width: 100%;
`;

const Repository: React.FC<RepositoryProps> = ({ repository, bookmarked }) => {
  const dispatch = useDispatch();
  const createBookmark = useCallback((repo: RepositoryType) => dispatch(createBookmarkAction(repo)), [dispatch]);
  const deleteBookmark = useCallback((id: number) => dispatch(deleteBookmarkAction(id)), [dispatch]);

  const handleToggleBookmark = () => {
    if (bookmarked) {
      deleteBookmark(repository.id);
    } else {
      createBookmark(repository);
    }
  };

  return (
    <CardContent className="mb-3">
      <Card.Header as="h5">
        <Row className="align-items-center">
          <Col>
            {repository?.owner?.login}
            /
            {repository.name}
          </Col>
          <Col xs="auto">
            <Button onClick={handleToggleBookmark} size="sm" variant="link">
              {bookmarked ? <BookmarkFill /> : <BookmarkPlus />}
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Text>{repository.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Row>
          <Col className="d-flex align-items-center" xs="auto">
            <Star />
            &nbsp;
            {repository.stargazers_count}
          </Col>
          {repository?.language
            && (
            <Col className="d-flex align-items-center" xs="auto">
              {repository?.language}
            </Col>
)}
          <Col className="d-flex align-items-center" xs="auto">
            Updated &nbsp;
            {moment(repository?.updated_at).fromNow()}
          </Col>
        </Row>
      </Card.Footer>
    </CardContent>
  );
};

export default memo(Repository);
