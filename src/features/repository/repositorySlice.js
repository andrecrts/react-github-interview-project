import { createSlice } from '@reduxjs/toolkit';

export const repositorySlice = createSlice({
    name: 'repository',
    initialState: {
        byUserName: [],
        byRepoName: [],
        bookmarks: []
    },
    reducers: {
        setDataByUserName: (state, action) => {
            state.byUserName = action.payload;
        },
        setDataByRepoName: (state, action) => {
            state.byRepoName = action.payload;
        },
        setBookmarks: (state, action) => {
            state.bookmarks = action.payload;
        }
    }
});

export const { setDataByUserName, setDataByRepoName, setBookmarks } = repositorySlice.actions;

export const selectDataByUserName = state => state.repository.byUserName;
export const selectDataByRepoName = state => state.repository.byRepoName;
export const selectBookmarks = state => state.repository.bookmarks;

export default repositorySlice.reducer;