// ---Dependencys
import React, { useEffect } from 'react';
// ---Redux
// ---Redux
import { useSelector, useDispatch } from 'react-redux';
import { getBookmarksList, cleanSearchList } from 'Actions/search';
import { changeLoadState } from 'Actions/loading';
// ---Components
import BookmarksTable from 'Comp/BookmarksComps/BookmarksTable';
// ---ComonComponents
import LoadingScreen from 'CommonComps/LoadingScreen';
import { deleteBookmark } from 'Others/peticiones';

// ------------------------------------------ COMPONENT-----------------------------------------
function BookmarksCont() {
  // Redux States
  const { currentList } = useSelector(reducers => reducers.searchReducer);
  const { loading } = useSelector(reducers => reducers.loadingReducer);
  // Redux Actions
  const dispatchR = useDispatch();
  const getBookmarks = loadingMethod =>
    dispatchR(getBookmarksList(loadingMethod));
  const cleanSearch = () => dispatchR(cleanSearchList());
  const changeLoading = flag => dispatchR(changeLoadState(flag));

  useEffect(() => {
    cleanSearch();
    getBookmarks(changeLoading);
  }, []);

  async function deleteMethod(id) {
    await deleteBookmark(id);
    getBookmarks(changeLoading);
  }

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <React.Fragment>
      <BookmarksTable deleteMethod={deleteMethod} currentList={currentList} />
    </React.Fragment>
  );
}

export default BookmarksCont;
