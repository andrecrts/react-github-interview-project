import React, { Component } from "react";
import "./favorites.scss";
// import { getUserRepos, searchRepo } from "../../providers/github/git-api";
import loader from "../../assets/img/loader.svg";
// import Star from "../../components/icons/star";
import Header from '../../components/header/header';
import Card from "../../components/cards/card";

class Favorites extends Component {
    state = {
        repos: null,
        loader: true,
    };

    componentDidMount() {
        var favsArray = JSON.parse(localStorage.getItem("favorites"));
        this.setState({repos: favsArray, loader: false})
        console.log(favsArray)
    }

    render() {
        const ALL_REPOS = this.state.repos;

        return (
            <div>
                <Header></Header>
                <div className="Favorites">
                    {this.state.loader ?
                        <div className="loader">
                            <img src={loader} alt="loader" />
                        </div>
                        :
                        <div className="cards-wrapper">
                            { this.state.repos ?
                                ALL_REPOS.map((repo, index) => {
                                    return (
                                        <Card key={index} data={repo} handleClick={this.handleClick}/>
                                    );
                                })
                                :
                                <p>
                                    You don't have added any repositories to favorites.
                                </p>
                            }
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Favorites;
