// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import SearchCont from 'Cont/SearchCont';

// ------------------------------------------ COMPONENT-----------------------------------------
const SearchPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Search...</title>
      </Helmet>
      <SearchCont />
    </React.Fragment>
  );
};

export default SearchPage;
