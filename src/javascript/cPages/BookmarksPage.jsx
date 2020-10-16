// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import BookmarksCont from 'Cont/BookmarksCont';

// ------------------------------------------ COMPONENT-----------------------------------------
const BookmarksPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Bookmarks...</title>
      </Helmet>
      <BookmarksCont />
    </React.Fragment>
  );
};

export default BookmarksPage;
