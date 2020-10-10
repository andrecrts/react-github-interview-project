import { useFormik } from 'formik';
import React, { useCallback, useEffect } from 'react';
import {
  Col, Container, Form, Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { fetchRepositoriesByUser, setRepositories } from '../../actions/repository';
import Repository from '../../components/Repository/Repository';
import { RepositoryType } from '../../types/repository';
import { RootState } from '../../types/states';

export interface UserSearchPageProps { }

const UserSearchPage: React.FC<UserSearchPageProps> = () => {
  // Redux connect
  const dispatch = useDispatch();
  const repositories: RepositoryType[] = useSelector<RootState, RepositoryType[]>(
    (state) => state?.repositoryReducer?.repositories ?? [],
  );
  const bookmarks = useSelector<RootState, RepositoryType[]>(state => state?.bookmarksReducer?.bookmarks ?? []);

  useEffect(
    () => () => {
      dispatch(
        setRepositories({
          items: [],
          totalCount: 0,
        }),
      );
    },
    [],
  );

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: Yup.object({
      search: Yup.string(),
    }),
    onSubmit: async ({ search }) => {
      dispatch(fetchRepositoriesByUser(search));
    },
  });

  const handleSubmit = useCallback((e: React.FormEvent<HTMLElement>) => {
    formik.handleSubmit();
    e.preventDefault();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="search">
              <Form.Control
                autoComplete="off"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Search user"
                type="text"
                value={formik.values.search}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      {repositories.map((repo) => (
        <Row key={repo.id}>
          <Col>
            <Repository bookmarked={bookmarks.some(mark => mark.id === repo.id)} repository={repo} />
          </Col>
        </Row>
      ))}

      {/* {repositories?.length ? (
        <Row>
          <Col>
            <Pagination>{itemsPagination()}</Pagination>
          </Col>
        </Row>
      ) : null} */}
    </Container>
  );
};
export default UserSearchPage;
