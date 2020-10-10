import { useFormik } from 'formik';
import React, { useCallback } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { fetchRepositoriesAction } from '../../actions/repository';
import { RepositoryType } from '../../types/repository';
import { RootState } from '../../types/state';

export interface RepositorySearchPageProps {}

const RepositorySearchPage: React.FC<RepositorySearchPageProps> = () => {
  // Redux connect
  const repositories: RepositoryType[] = useSelector<RootState, RepositoryType[]>(
    (state) => state?.repositoryReducer?.repositories ?? [],
  );
  const dispatch = useDispatch();
  const fetchRepositories = useCallback((search) => dispatch(fetchRepositoriesAction(search)), [dispatch]);

  console.log(repositories);

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
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="search">
              <Form.Control
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
      <Row>
        {repositories.map(() => (
          <Card style={{ width: '18rem' }}>
            <Card.Img src="holder.js/100px180" variant="top" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the cards content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default RepositorySearchPage;
