import React, { Component } from 'react';
import './search-by-name.scss';
import BigLogo from '../../components/logo/big-logo';
import SearchContainer from '../../components/search/search-container';

class SearchByName extends Component {
    render() {
        return (
            <div className="SearchByName">
                <BigLogo></BigLogo>
                <SearchContainer></SearchContainer>
            </div>
        )
    }
}


export default SearchByName;