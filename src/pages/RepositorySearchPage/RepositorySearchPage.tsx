import { useFormik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { Col, Container, Form, Pagination, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { fetchRepositoriesAction, setRepositories } from '../../actions/repository';
import Repository from '../../components/Repository/Repository';
import { RepositoryType } from '../../types/repository';
import { RootState } from '../../types/states';

export interface RepositorySearchPageProps {}

const RepositorySearchPage: React.FC<RepositorySearchPageProps> = () => {
  // Redux connect
  const repositories: RepositoryType[] = useSelector<RootState, RepositoryType[]>(
    (state) => state?.repositoryReducer?.repositories ?? [],
  );
  const currentPage = useSelector<RootState, number>((state) => state?.repositoryReducer?.page ?? 0);
  const bookmarks = useSelector<RootState, string[]>((state) => state?.bookmarksReducer.bookmarks ?? []);
  const dispatch = useDispatch();
  const fetchRepositories = useCallback(
    (search: string, page?: number) => dispatch(fetchRepositoriesAction(search, page)),
    [dispatch],
  );

  // State
  const [currentSearch, setCurrentSearch] = useState('');

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
      setCurrentSearch(search);
      fetchRepositories(search);
    },
  });

  const handleSubmit = useCallback((e: React.FormEvent<HTMLElement>) => {
    formik.handleSubmit();
    e.preventDefault();
  }, []);

  const handleChangePage = useCallback(
    (page) => {
      fetchRepositories(currentSearch, page);
    },
    [currentSearch],
  );

  const itemsPagination = useCallback(() => {
    const items = [];
    // eslint-disable-next-line no-plusplus
    for (let number = currentPage; number <= currentPage + 10; number++) {
      items.push(
        <Pagination.Item active={number === currentPage} key={number} onClick={() => handleChangePage(number)}>
          {number}
        </Pagination.Item>,
      );
    }
    return items;
  }, [currentPage]);

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
      {repositories.map((repo) => (
        <Row key={repo.id}>
          <Col>
            <Repository bookmarked={bookmarks.includes(repo.id)} repository={repo} />
          </Col>
        </Row>
      ))}

      {repositories?.length ? (
        <Row>
          <Col>
            <Pagination>{itemsPagination()}</Pagination>
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};

export default RepositorySearchPage;
