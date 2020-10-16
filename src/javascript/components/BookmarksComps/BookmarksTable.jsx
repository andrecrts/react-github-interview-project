/* eslint-disable camelcase */
// ---Dependencys
import React from 'react';
import { Table } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
// ---ComonComponents
import ButtonMlg from 'CommonComps/ButtonMlg';
// ---Components
// import AuthValidate from 'Comp/Master/AuthValidate';

// ------------------------------------------ COMPONENT-----------------------------------------
function BookmarksTable(props) {
  const { currentList, deleteMethod } = props;
  const dataSource = currentList;

  function handleDelete(e) {
    deleteMethod(e.currentTarget.value);
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
      title: 'Delete',
      dataIndex: 'id',
      key: 'id',
      render: id => (
        <ButtonMlg
          variant="red"
          size="small"
          htmlType="button"
          widthB="80px"
          onClick={handleDelete}
          value={id}
          icon={<CloseCircleFilled />}
        />
      )
    }
  ];

  return (
    <React.Fragment>
      <Table
        style={{ width: '94%', margin: '20px auto 20px auto' }}
        pagination={{
          current: 1,
          pageSize: 100
        }}
        dataSource={dataSource}
        columns={columns}
      />
    </React.Fragment>
  );
}

export default BookmarksTable;
