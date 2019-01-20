import axios from "axios";

const BASE_URL = "https://api.github.com";

export const getUserRepos = username => {
    const url = `${BASE_URL}/users/${username}/repos?per_page=250`;

    return new Promise ((resolve, reject) => {
        axios.get(url).then((response) => {
            resolve(response.data)
        })
        .catch((err) => {
            reject(err)
        })
    })
};

export const searchRepo = query => {
    const url = `${BASE_URL}/search/repositories?q=${query}`;

    return new Promise ((resolve, reject) => {
        axios.get(url).then((response) => {
            resolve(response.data)
        }).catch((err) => {
            reject(err)
        })
    })
};
