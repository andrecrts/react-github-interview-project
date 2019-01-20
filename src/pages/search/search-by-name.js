import React from "react";
import "./search-by-name.scss";
import BigLogo from "../../components/logo/big-logo";
import SearchContainer from "../../components/search/search-container";

const SearchByName = (props) => (
    <div className="SearchByName">
        <BigLogo />
        <SearchContainer data={props} />
    </div>
);

export default SearchByName;
