import React, { useState } from 'react';
import { connect } from 'react-redux';

import { searchRepositoriesAction } from '../actions/searchActions';

let Search = ({ resource, searchRepositoriesAction }) => {

	const [query, setQuery] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
  	}

	const handleSearch = (event) => {
		searchRepositoriesAction({query});
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
				placeholder="Search..."
				type="text"
	          	value={query}
	          	onChange={e => setQuery(e.target.value)} />
			<button onClick={handleSearch}>Go</button>
		</form>
	)
}

export default connect(null, {
     searchRepositoriesAction: searchRepositoriesAction
})(Search);