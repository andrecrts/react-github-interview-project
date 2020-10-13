import { useFormik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Col, Container, Form, InputGroup, Pagination, Row, Spinner,
} from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
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
  const { repositories, totalCount, page: activePage } = useSelector<RootState, RepositoryState>(
    (state) => state?.repositoryReducer,
  );
  const bookmarks = useSelector<RootState, RepositoryType[]>(state => state?.bookmarksReducer?.bookmarks ?? []);
  const fetchRepositories = useCallback(
    (search: string, page?: number) => dispatch(fetchRepositoriesAction(search, page)),
    [dispatch],
  );

  const [loading, setLoading] = useState(false);
  const [localSearch, setLocalSearch] = useState('');

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
      setLocalSearch(search);
      if (search) {
        setLoading(true);
        fetchRepositories(search);
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

  const handleChangePage = useCallback((page: number) => {
    window.scrollTo(0, 0);
    setLoading(true);
    fetchRepositories(localSearch, page);
  }, [localSearch, fetchRepositories]);

  const renderItemsPagination = useCallback(() => {
    const items = [];
    const maxPage = totalCount % 30;
    let finalPage = activePage + 5 < 10 ? 10 : activePage + 5;
    finalPage = finalPage + 5 < maxPage ? finalPage : maxPage;
    const initialPage = activePage - 5 <= 0 ? 1 : activePage - 5;

    if (initialPage !== 1) {
      items.push(<Pagination.Item key={0} onClick={() => handleChangePage(1)}> 1</Pagination.Item>);
      items.push(<Pagination.Ellipsis key={-1} />);
    }

    // eslint-disable-next-line no-plusplus
    for (let page = initialPage; page <= finalPage; page++) {
      items.push(
        <Pagination.Item active={page === activePage} key={page} onClick={() => handleChangePage(page)}>
          {page}
        </Pagination.Item>,
      );
    }
    if (activePage + 5 < maxPage) {
      items.push(<Pagination.Ellipsis key={-2} />);
      items.push(
        <Pagination.Item key={maxPage + 1} onClick={() => handleChangePage(maxPage)}>
          {maxPage}
        </Pagination.Item>,
      );
    }
    return items;
  }, [activePage, totalCount, handleChangePage]);

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
                  placeholder="Search repository"
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
          <Row className="justify-content-center">
            <Col xs="auto">
              <Pagination>
                {renderItemsPagination()}
              </Pagination>
            </Col>
          </Row>
        </>
      ) : null}

    </Container>
  );
};

export default RepositorySearchPage;
