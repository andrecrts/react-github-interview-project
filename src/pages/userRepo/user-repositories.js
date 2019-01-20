import React, { Component } from "react";
import "./user-repositories.scss";
import { getUserRepos, searchRepo } from "../../providers/github/git-api";
import loader from "../../assets/img/loader.svg";
import Star from "../../components/icons/star";

class UserRepositories extends Component {
    state = {
        repos: null,
        loader: true,
    };

    componentDidMount() {
        var user = this.props.match.params.user;

        getUserRepos(user)
            .then(response => {
                if (response.length > 0) {
                    this.setState({ repos: response, loader: false });
                    console.log(this.state.repos)
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

    handleClick = (e,name) => {
        e.preventDefault();
        console.log(name)

        searchRepo(name).then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }


    render() {
        const ALL_REPOS = this.state.repos;

        return (
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
                                    <div className="card-repositorie" key={index}>
                                        <div className="card-header">
                                            <h3 className="name" onClick={ e => this.handleClick(e, repo.name)}>
                                                {repo.name}
                                            </h3>
                                            <button className="add-fav">
                                                <Star size="24px" color="#c5c5c5" />
                                            </button>
                                        </div>
                                        <div className="card-body">
                                            <p>
                                                {repo.description ? repo.description : 'No description available'}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}

export default UserRepositories;
