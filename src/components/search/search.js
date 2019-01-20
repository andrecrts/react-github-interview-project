import React from "react";
import "./search.scss";

const Search = props => (
    <div>
        <form className="Search" onSubmit={props.handleSubmit}>
            <input
                ref={props.setRef}
                type="text"
                className="Search-input"
                placeholder="Search github users"
                name="search"
                onChange={props.handleChange}
                value={props.value}
                autoComplete="off"
            />
        </form>
    </div>
);

export default Search;
