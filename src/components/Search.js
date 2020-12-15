import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchAction } from '../actions/search';
import { SearchIcon } from '../icons';

let Search = ({ searchAction }) => {

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
		searchAction({query});
	}

	return (
		<>
			
			<div className="header">
				<form onSubmit={handleSubmit} className="search-form">
					<div className="search-input">
						<input 
							className="input"
							placeholder="Search..."
							type="text"
				          	value={query}
				          	onChange={e => setQuery(e.target.value)} />
				        
					</div>
					<div className="search-button">
						<button onClick={handleSearch} className="button button-search"><SearchIcon /></button>
					</div>
				</form>
			</div>
			{message && 
				<div className="p-10 small-text">{message}</div>
			}

		</>
	)
}

export default connect(null, {
     searchAction: searchAction
})(Search);