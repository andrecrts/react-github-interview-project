import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import {
    selectDataByUserName,
    setDataByUserName,
    selectBookmarks,
    setBookmarks
} from '../../features/repository/repositorySlice';

// Components
import { SearchBy } from './commons/SearchBy';

// Services
import { getUserRepos } from '../../services';

// Config
import { getRepositoriesTableFormat, toggleItem } from './commons/config';

// Icons
import PersonIcon from '@material-ui/icons/Person';


export const SearchByUserName = () => {
    const data = useSelector(selectDataByUserName);
    const bookmarks = useSelector(selectBookmarks);
    const dispatch = useDispatch();

    const handleChange = async (e) => {
        const { value } = e.target;
        const searchResults = await getUserRepos(value);
        dispatch(setDataByUserName(searchResults));
    };

    const toggleBookmark = (row) => {
        const newBookmarks = toggleItem(bookmarks, row.original);
        dispatch(setBookmarks(newBookmarks));
    };

    return (
        <SearchBy
            id="searchByUserName"
            label="username"
            icon={<PersonIcon />}
            handleChange={handleChange}
            data={data}
            tableFormat={getRepositoriesTableFormat}
            action={toggleBookmark}
        />
    );
};
