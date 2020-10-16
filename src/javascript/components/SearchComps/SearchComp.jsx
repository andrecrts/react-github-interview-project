// ---Dependencys
import React from 'react';
// ---Components
import SearchBar from 'Comp/SearchComps/SearchBar';
import SearchTable from 'Comp/SearchComps/SearchTable';

function SearchComp(props) {
  const { doSearch, currentList, label, saveBookmark } = props;
  if (currentList && currentList.length === 0) {
    return (
      <React.Fragment>
        <SearchBar doSearch={doSearch} label={label} />
        <p>Do a search</p>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <SearchBar doSearch={doSearch} label={label} />
      <SearchTable currentList={currentList} saveBookmark={saveBookmark} />
    </React.Fragment>
  );
}

export default SearchComp;
