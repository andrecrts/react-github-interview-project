import { useFormik } from 'formik';
import React, { useCallback, useEffect } from 'react';
import {
  Col, Container, Form, Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { fetchRepositoriesAction, setRepositories } from '../../actions/repository';
import Repository from '../../components/Repository/Repository';
import { RepositoryType } from '../../types/repository';
import { RepositoryState, RootState } from '../../types/states';

export interface RepositorySearchPageProps { }

const RepositorySearchPage: React.FC<RepositorySearchPageProps> = () => {
  // Redux connect
  const dispatch = useDispatch();
  const { repositories, totalCount } = useSelector<RootState, RepositoryState>(
    (state) => state?.repositoryReducer,
  );
  const bookmarks = useSelector<RootState, RepositoryType[]>(state => state?.bookmarksReducer?.bookmarks ?? []);
  const fetchRepositories = useCallback(
    (search: string, page?: number) => dispatch(fetchRepositoriesAction(search, page)),
    [dispatch],
  );

  useEffect(
    () => () => {
      dispatch(
        setRepositories({
          items: [],
          totalCount: 0,
        }),
      );
    },
    [dispatch],
  );

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: Yup.object({
      search: Yup.string(),
    }),
    onSubmit: async ({ search }) => {
      fetchRepositories(search);
    },
  });

  const handleSubmit = useCallback((e: React.FormEvent<HTMLElement>) => {
    formik.handleSubmit();
    e.preventDefault();
  }, [formik]);

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
                placeholder="Search repository"
                type="text"
                value={formik.values.search}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      {repositories?.length ? (
        <>
          <Row className="mb-2">
            <Col>
              <b>
                {totalCount.toLocaleString()}
                &nbsp; repository results
              </b>
            </Col>
          </Row>
          {
            repositories.map((repo) => (
              <Row key={repo.id}>
                <Col>
                  <Repository bookmarked={bookmarks.some(mark => mark.id === repo.id)} repository={repo} />
                </Col>
              </Row>
            ))
          }
        </>

      ) : null}

    </Container>
  );
};

export default RepositorySearchPage;
