const GITHUB_API_URL = "https://api.github.com"

export const search = ({query, username}) => {

	// If username is defined then query users endpoint 
	// otherwise use the standar search
	let url = username 
		? `${GITHUB_API_URL}/users/${username}/repos?per_page=250`
		: `${GITHUB_API_URL}/search/repositories?q=${query}`

	return fetch(url)
		.then(response => response.json())
		.then(json => {

			// Users endpoint is an array and standar search an object
			const items = json.items ? json.items : json

			return items.map(({ id, name, full_name, description, html_url, stargazers_count, watchers_count, owner }) => ({
				id,
				name, 
				full_name, 
				description, 
				html_url,
				stargazers_count,
				watchers_count,
				owner: {
					id: owner.id, 
					login: owner.login, 
					avatar_url: owner.avatar_url, 
					html_url: owner.html_url
				}
			}));
		});
}
