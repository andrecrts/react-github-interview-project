import moment from 'moment';
import React, { memo, useCallback } from 'react';
import {
  Button, Card, Col, Row,
} from 'react-bootstrap';
import {
  BookmarkFill, BookmarkPlus, Diagram2, Eye, Star,
} from 'react-bootstrap-icons';
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

const Description = styled(Card.Text)`
  overflow: hidden;
  max-height: 140px;
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
          <Col data-test="title">
            <a href={repository.html_url} rel="noopener noreferrer" target="_blank">
              {repository?.owner?.login}
              /
              {repository.name}
            </a>
          </Col>
          <Col xs="auto">
            <Button data-test="toggleButton" onClick={handleToggleBookmark} size="sm" variant="link">
              {bookmarked ? <BookmarkFill /> : <BookmarkPlus />}
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Description>{repository.description}</Description>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Row>
          <Col className="d-flex align-items-center" xs="auto">
            <Star />
            &nbsp;
            {repository.stargazers_count ?? 0}
          </Col>
          <Col className="d-flex align-items-center" xs="auto">
            <Eye />
            &nbsp;
            {repository.watchers ?? 0}
          </Col>
          <Col className="d-flex align-items-center" xs="auto">
            <Diagram2 style={{ transform: 'rotateZ(180deg)' }} />
            &nbsp;
            {repository.forks ?? 0}
          </Col>
          {repository?.language
            && (
              <Col className="d-flex align-items-center" data-test="language" xs="auto">
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
