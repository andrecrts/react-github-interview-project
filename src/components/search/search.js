import React from "react";
import "./search.scss";

const Search = props => (
    <div>
        <form className="Search" onSubmit={props.handleSubmit}>
            <input
                ref={props.setRef}
                type="text"
                className="Search-input"
                placeholder={props.placeholder}
                name="search"
                onChange={props.handleChange}
                value={props.value}
                autoComplete="off"
            />

            <div className="select-mask">
                <select value={props.selectValue} onChange={props.handleChangeSelect}>
                    <option value="users">Users</option>
                    <option value="repositories">Repositories</option>
                </select>
            </div>
        </form>
    </div>
);

export default Search;
