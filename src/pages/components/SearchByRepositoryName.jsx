import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import {
    selectDataByRepoName,
    setDataByRepoName,
    selectBookmarks,
    setBookmarks
} from '../../features/repository/repositorySlice';

// Components
import { SearchBy } from './commons/SearchBy';

// Services
import { search } from '../../services';

// Config
import { getRepositoriesTableFormat, toggleItem } from './commons/config';

// Icon
import GitHubIcon from '@material-ui/icons/GitHub';

export const SearchByRepositoryName = () => {
    const data = useSelector(selectDataByRepoName);
    const bookmarks = useSelector(selectBookmarks);
    const dispatch = useDispatch();

    const handleChange = async (e) => {
        const { value } = e.target;
        const searchResults = await search(value);
        const items = searchResults?.items;
        dispatch(setDataByRepoName(items));
    };

    const toggleBookmark = (row) => {
        const newBookmarks = toggleItem(bookmarks, row.original);
        dispatch(setBookmarks(newBookmarks));
    };

    return (
        data ? (
            <SearchBy
                id="searchByRepositoryName"
                label="repository"
                icon={<GitHubIcon />}
                handleChange={handleChange}
                data={data}
                tableFormat={getRepositoriesTableFormat}
                action={toggleBookmark}
            />
        ) : null
    );
};
