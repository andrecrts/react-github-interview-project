import { useFormik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Col, Container, Form, InputGroup, Row, Spinner,
} from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
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

  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    setLoading(false);
  }, [repositories]);

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: Yup.object({
      search: Yup.string(),
    }),
    onSubmit: async ({ search }) => {
      if (search) {
        setLoading(true);
        dispatch(fetchRepositoriesByUser(search));
      } else {
        dispatch(
          setRepositories({
            items: [],
            totalCount: 0,
          }),
        );
      }
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
              <InputGroup>
                <Form.Control
                  autoComplete="off"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  placeholder="Search user"
                  type="text"
                  value={formik.values.search}
                />
                <InputGroup.Append>
                  {loading
                    ? (
                      <Button className="px-3" disabled size="sm" variant="outline-secondary">
                        <Spinner animation="border" size="sm" />
                      </Button>
                    )
                    : (
                      <Button className="px-3" size="sm" type="submit" variant="outline-secondary">
                        <Search />
                      </Button>
                    )}
                </InputGroup.Append>
              </InputGroup>
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
