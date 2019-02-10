import {UrlBase} from '/GetUrlBase';

const GetUrlRespositoryName = name => {
    return `${UrlBase}?q=${name}&appid=${api_key}`;
}

export const getUserRepos = (username) => {
    const url = `${UrlBase}/users/${username}/repos?per_page=250`
    return axios.get(url).then(response => response.data)
  }
  
  export const search = (query) => {
      const url = `${UrlBase}/search/repositories?q=${query}`
      return axios.get(url).then(response => response.data)
  }

export default GetUrlRespositoryName;
