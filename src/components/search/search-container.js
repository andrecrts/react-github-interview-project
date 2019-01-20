import React, { Component } from "react";
import Search from "./search";
import { getUserRepos, searchRepo } from "../../providers/github/git-api";
import loader from "../../assets/img/loader.svg";

class SearchContainer extends Component {
    state = {
        value: "",
        loader: false,
        userRepo: null,
        redirect: false,
        valueSelect: "users",
        placeholder: "Search user on Github",
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ loader: true });
        console.log(this.props.data, '---')
        
        if (this.state.valueSelect === "users") {
            getUserRepos(this.state.value)
                .then(response => {
                    this.setState({ loader: false });
                    console.log(response);

                    if (response.length > 0) {
                        this.props.data.history.push(
                            "user/" + this.state.value
                        );
                    } else {
                        alert(
                            "This username doesn't have repositories, try with a different user."
                        );
                    }
                })
                .catch(err => {
                    console.log(err);
                    alert(
                        "This user doesn't exist, try with a different user."
                    );
                    this.setState({ loader: false });
                });
        } else {
           
            searchRepo(this.state.value)
                .then(response => {
                    if (response) {
                        console.log(response)
                        this.setState({ loader: false });
                        this.props.data.history.push(
                            "/search/" + this.state.value
                        );
                    } else {
                        alert(
                            "Error"
                        );
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
    };

    setInputRef = element => {
        this.input = element;
    };

    handleInputChange = e => {
        this.setState({
            value: e.target.value.replace(" ", "")
        });
    };

    handleSelectChange = e => {
        this.setState({
            valueSelect: e.target.value,
            placeholder: "Search " + e.target.value + " on Github"
        });

        console.log(this.state.placeholder);
    };

    render() {
        return (
            <div>
                <Search
                    handleSubmit={this.handleSubmit}
                    setRef={this.setInputRef}
                    handleChange={this.handleInputChange}
                    value={this.state.value}
                    handleChangeSelect={this.handleSelectChange}
                    valueSelect={this.state.valueSelect}
                    placeholder={this.state.placeholder}
                />

                {this.state.loader && (
                    <div className="loader">
                        <img src={loader} alt="loader" />
                    </div>
                )}
            </div>
        );
    }
}

export default SearchContainer;
