import React, { Component } from "react";
import Search from "./search";
import { getUserRepos } from "../../providers/github/git-api";
import loader from "../../assets/img/loader.svg";

class SearchContainer extends Component {
    state = {
        value: "",
        loader: false,
        userRepo: null
    };

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ loader: true })
        getUserRepos(this.state.value)
            .then(response => {
                this.setState({ loader: false })

                console.log(response)
                console.log(response.length)

                if (response.length > 0) {
                    console.log('entra')
                } else {
                    alert('Este usuario no tiene repositorios, intenta con otro usuario.')
                }
            })
            .catch(err => {
                console.log(err);
                alert('Este usuario no existe, intenta con otro.')
                this.setState({ loader: false })
            });
    };

    setInputRef = element => {
        this.input = element;
    };

    handleInputChange = e => {
        this.setState({
            value: e.target.value.replace(" ", "")
        });
    };

    render() {
        return (
            <div>
                <Search
                    handleSubmit={this.handleSubmit}
                    setRef={this.setInputRef}
                    handleChange={this.handleInputChange}
                    value={this.state.value}
                />

                {
                    this.state.loader &&
                    <div className="loader">
                        <img src={loader} alt="loader" />
                    </div>
                }
            </div>
        );
    }
}

export default SearchContainer;
