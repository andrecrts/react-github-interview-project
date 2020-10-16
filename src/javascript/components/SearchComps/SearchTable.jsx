/* eslint-disable camelcase */
// ---Dependencys
import React from 'react';
import { Table } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
// ---ComonComponents
import ButtonMlg from 'CommonComps/ButtonMlg';
// ---Components
// import AuthValidate from 'Comp/Master/AuthValidate';

// ------------------------------------------ COMPONENT-----------------------------------------
function SearchTable(props) {
  const { currentList, saveBookmark } = props;
  const dataSource = currentList;

  function handleSave(e) {
    saveBookmark(e.currentTarget.value);
  }

  const columns = [
    {
      title: 'Repo name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'User',
      dataIndex: 'owner',
      key: 'owner',
      render: owner => <span>{owner.login}</span>
    },
    {
      title: 'Visit',
      dataIndex: 'html_url',
      key: 'html_url',
      render: html_url => (
        <a href={html_url} rel="noopener noreferrer" target="_blank">
          <span>{html_url}</span>
        </a>
      )
    },
    {
      title: 'Save',
      dataIndex: 'id',
      key: 'id',
      render: (id, unused, index) => (
        <ButtonMlg
          variant="blue"
          size="small"
          htmlType="button"
          widthB="80px"
          onClick={handleSave}
          value={index}
          icon={<HeartOutlined />}
        />
      )
    }
  ];

  return (
    <React.Fragment>
      <Table
        pagination={{
          current: 1,
          pageSize: 250
        }}
        dataSource={dataSource}
        columns={columns}
      />
    </React.Fragment>
  );
}

export default SearchTable;
