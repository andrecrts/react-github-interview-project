import { useFormik } from 'formik';
import React, { useCallback } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';

export interface UserSearchPageProps {}

const UserSearchPage: React.FC<UserSearchPageProps> = () => {
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: Yup.object({
      search: Yup.string(),
    }),
    onSubmit: async (values) => {
      console.log(values);
      // const { search } = values;
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
                placeholder="Search user"
                type="search"
                value={formik.values.search}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default UserSearchPage;
