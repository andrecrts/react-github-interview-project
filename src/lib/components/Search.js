import React, { useState } from 'react';
import { connect } from 'react-redux';

import { searchRepositoriesAction } from '../actions/searchActions';

let Search = ({ resource, searchRepositoriesAction }) => {

	const [query, setQuery] = useState("");
	const [message, setMessage] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();
  	}

	const handleSearch = (event) => {
		if(query === ''){
			setMessage("Ups! You should type something for your search such as dog, cat, mouse or whetever...")
			return false
		}
		setMessage(null)
		searchRepositoriesAction({query});
	}

	return (
		<form onSubmit={handleSubmit} className="search">
			<input 
				placeholder="Search..."
				type="text"
	          	value={query}
	          	onChange={e => setQuery(e.target.value)} />
			<button onClick={handleSearch}>Go</button>
			{message && 
				<div>{message}</div>
			}
		</form>
	)
}

export default connect(null, {
     searchRepositoriesAction: searchRepositoriesAction
})(Search);