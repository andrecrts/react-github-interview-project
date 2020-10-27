import React from 'react';

// Components
import { Action } from '../../../components/Action';

// Icons
import BookmarkIcon from '@material-ui/icons/Bookmark';

export const toggleItem = (array, item) => {
    let newArray = [...array];
    if (array.indexOf(item)  !== -1) {
        // Element exists, remove it
        newArray = newArray.filter(obj => obj !== item);
    } else {
        // Element doesn't exist, add it
        newArray.push(item);
    }
    return newArray;
}

const getActions = ({
    row, handleAction
  }) => {
    return (
      <div>
        {(
            <Action
              title="Bookmark"
              icon={<BookmarkIcon />}
              handler={() => handleAction(row)}
            />
        )}
      </div>
    );
  };

export const getRepositoriesTableFormat = () => {
    const format = [
      {
        Header: <span>Name</span>,
        accessor: 'name'
      },
      {
        Header: <span>Description</span>,
        accessor: 'description'
      },
      {
        Header: <span>URL</span>,
        accessor: 'url'
      },
      {
        Header: <span>Created</span>,
        accessor: 'created_at'
      },
      {
        Header: <span>Language</span>,
        accessor: 'language'
      },
      {
        Header: <span>Actions</span>,
        id: 'actions',
        Cell: getActions
      }
    ];
    return format;
};