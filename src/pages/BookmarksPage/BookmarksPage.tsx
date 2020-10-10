import React, { useCallback, useState } from 'react';
import {
  Col, Container, Form, Row,
} from 'react-bootstrap';
import { EmojiFrown } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Repository from '../../components/Repository/Repository';
import { RepositoryType } from '../../types/repository';
import { RootState } from '../../types/states';

export interface BookmarksPageProps { }

const Empty = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 20px 0;
`;

const BookmarksPage: React.FC<BookmarksPageProps> = () => {
  const bookmarks = useSelector<RootState, RepositoryType[]>(state => state?.bookmarksReducer?.bookmarks ?? []);
  const [search, setSearch] = useState('');

  const handleChangeSearch = useCallback((e) => {
    setSearch(e.target.value);
    e.preventDefault();
  }, []);

  return (
    <Container>
      <Row>
        <h2> Bookmarks </h2>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="search">
              <Form.Control
                autoComplete="off"
                onChange={handleChangeSearch}
                placeholder="Search repository"
                type="text"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      {
        bookmarks.length ? bookmarks
          .filter(repo => repo?.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            || repo.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .map(repo => (
            <Row key={repo.id}>
              <Col>
                <Repository bookmarked repository={repo} />
              </Col>
            </Row>

          ))
          : (
            <Row className="justify-content-center">
              <Col xs="auto">
                <Empty>
                  <p> Bookmarks are empty</p>
                  <EmojiFrown />
                </Empty>
              </Col>
            </Row>
          )
      }
    </Container>
  );
};

export default BookmarksPage;
