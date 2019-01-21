import React, { Component } from "react";
import "./user-repositories.scss";
import { getUserRepos } from "../../providers/github/git-api";
import loader from "../../assets/img/loader.svg";
import Header from '../../components/header/header';
import Card from "../../components/cards/card";

class UserRepositories extends Component {
    state = {
        repos: null,
        loader: true,
        favorites: [],
        starColor: '#c5c5c5',
    };

    componentDidMount() {
        var user = this.props.match.params.user;

        if (localStorage.getItem("favorites")) {
            var favsArray = JSON.parse(localStorage.getItem("favorites"));
            
            for(let i = 0; i < favsArray.length; i++) {
                this.state.favorites.push(favsArray[i])
            }

            console.log('recibo local storage', favsArray);
        }

        console.log('state',this.state.favorites);

        getUserRepos(user)
            .then(response => {
                if (response.length > 0) {
                    for(let i = 0; i < response.length; i++) {
                        response[i]['selected'] = false
                    }

                    this.setState({ repos: response, loader: false });
                } else {
                    alert(
                        "This username doesn't have repositories, try with a different user."
                    );
                }
            })
            .catch(err => {
                console.log(err);
                alert("This user doesn't exist, try with a different user.");
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
                <Header></Header>
                <div className="UserRepositories">
                    {this.state.loader ?
                        <div className="loader">
                            <img src={loader} alt="loader" />
                        </div>
                        :
                        <div className="cards-wrapper">
                            {
                                ALL_REPOS.map((repo, index) => {
                                    return (
                                        <Card key={index} data={repo} handleClick={this.handleClick}/>
                                    );
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default UserRepositories;
