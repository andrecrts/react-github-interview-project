import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import {
    selectBookmarks,
    setBookmarks
} from '../features/repository/repositorySlice';

// Components
import { SearchBy } from './components/commons/SearchBy';

// Config
import { getRepositoriesTableFormat, toggleItem } from './components/commons/config';

// Icon
import SearchIcon from '@material-ui/icons/Search';

export const Bookmarks = () => {
    const data = useSelector(selectBookmarks);
    const dispatch = useDispatch();
    const [filterGlobal, setFilterGlobal] = useState();

    const handleChange = async (e) => {
        const { value } = e.target;
        setFilterGlobal(value);
    };

    const toggleBookmark = (row) => {
        const newBookmarks = toggleItem(data, row.original);
        dispatch(setBookmarks(newBookmarks));
    };

    return (
        data ? (
            <SearchBy
                id="searchBookmarked"
                label="search"
                icon={<SearchIcon />}
                handleChange={handleChange}
                data={data}
                tableFormat={getRepositoriesTableFormat}
                action={toggleBookmark}
                filterGlobal={filterGlobal || null}
            />
        ) : null
    );
};