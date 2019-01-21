import React, { Component } from "react";
import "./search-repo.scss";
import { searchRepo } from "../../providers/github/git-api";
import loader from "../../assets/img/loader.svg";
import Header from "../../components/header/header";
import Card from "../../components/cards/card";

class SearchRepo extends Component {
    state = {
        repos: null,
        loader: true,
        stuff: null,
        favorites: []
    };

    componentDidMount() {
        var repos = this.props.match.params.repo;

        if (localStorage.getItem("favorites")) {
            var favsArray = JSON.parse(localStorage.getItem("favorites"));
            
            for(let i = 0; i < favsArray.length; i++) {
                this.state.favorites.push(favsArray[i])
            }

            console.log('recibo local storage', favsArray);
        }

        console.log('state',this.state.favorites);

        searchRepo(repos)
            .then(response => {
                if (response.items.length > 0) {
                    this.setState({ loader: false, repos: response.items });
                } else {
                    alert("Error");
                }
            })
            .catch(err => {
                console.log(err);
                alert(
                    "This repository doesn't exist, try with a different repository name."
                );
                this.setState({ loader: false });
            });
    }

    handleClick = (e, repo) => {
        e.preventDefault();
        var favorites = this.state.favorites
       
        console.log('Local storage', this.state.favorites)
        console.log('after push', this.state.favorites);


        for(let i = 0; i < favorites.length; i++) {
            favorites[i]['selected'] = true

            if (favorites.length > 1) {
                if (favorites[i].id === repo.id) {
                    favorites.pop(repo)
                } 
            }

        }

        favorites.push(repo)
        localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
        this.setState({starColor: '#efe62e'})
    };

    render() {
        const ALL_REPOS = this.state.repos;

        return (
            <div>
                <Header />
                <div className="SearchRepo">
                    {this.state.loader ? (
                        <div className="loader">
                            <img src={loader} alt="loader" />
                        </div>
                    ) : (
                        <div className="cards-wrapper">
                            {ALL_REPOS.map((repo, index) => {
                                return (
                                    <Card
                                        key={index}
                                        data={repo}
                                        handleClick={this.handleClick}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default SearchRepo;
