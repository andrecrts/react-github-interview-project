import React from "react";
import "./main-search.scss";
import BigLogo from "../../components/logo/big-logo";
import SearchContainer from "../../components/search/search-container";

const MainSearch = (props) => (
    <div className="MainSearch">
        <BigLogo />
        <SearchContainer data={props} />
    </div>
);

export default MainSearch;
