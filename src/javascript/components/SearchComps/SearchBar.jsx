// ---Dependencys
import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
// ---ComonComponents
import ButtonMlg from 'CommonComps/ButtonMlg';
// ------------------------------------------ COMPONENT-----------------------------------------
const SearchBar = props => {
  const { label, doSearch } = props;

  function localSubmit(value) {
    const newValue = value.searchParam.replace(/ /g, '+');
    console.log('Searching for:', newValue);
    doSearch(newValue);
  }

  const formItemLayoutLong = {
    labelCol: { span: 12 },
    wrapperCol: { span: 11 }
  };
  return (
    <React.Fragment>
      <Row className="rastreo-search">
        {/* ----------------------------form------------------------- */}
        <Form style={{ width: '100%' }} onFinish={localSubmit}>
          <Row>
            <Col xl={16}>
              <Form.Item
                {...formItemLayoutLong}
                name="searchParam"
                label={label}
                rules={[
                  {
                    required: true,
                    message: 'Please enter some value'
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xl={8}>
              <ButtonMlg
                variant="blue"
                size="small"
                htmlType="submit"
                widthB="180px"
                label="Search"
                icon={<LoginOutlined />}
              />
            </Col>
          </Row>
        </Form>
      </Row>{' '}
    </React.Fragment>
  );
};

export default SearchBar;
