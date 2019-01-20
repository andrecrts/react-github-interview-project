import React, { Component } from "react";
import "./search-repo.scss";
import { searchRepo } from "../../providers/github/git-api";
import loader from "../../assets/img/loader.svg";
import Star from "../../components/icons/star";

class SearchRepo extends Component {
    state = {
        repos: null,
        loader: true,
        stuff: null
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            stuff: nextProps.test
        });
    }

    componentDidMount() {
        var repos = this.props.match.params.repo;

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
        console.log(repo);
    };

    render() {
        const ALL_REPOS = this.state.repos;

        return (
            <div className="SearchRepo">
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
                                            <h3 className="name" onClick={ e => this.handleClick(e, repo)}>
                                                {repo.name}
                                            </h3>
                                            <button className="add-fav">
                                                <Star size="24px" color="#c5c5c5" />
                                            </button>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="owner">User: {repo.owner.login}</h5>
                                            <p>
                                                {repo.description ? repo.description : 'No description available'}
                                            </p>

                                            <div>
                                                <p>Open issues: {repo.open_issues}</p>
                                                <a className="link" href={repo.url}>{repo.url}</a>
                                            </div>
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

export default SearchRepo;
