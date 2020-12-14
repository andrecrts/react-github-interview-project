const BASE_URL = "https://api.github.com"

export const search = ({query, username}) => {

	let url = username 
		? `${BASE_URL}/users/${username}/repos?per_page=250`
		: `${BASE_URL}/search/repositories?q=${query}`

	return fetch(url)
		.then(response => response.json())
		.then(json => {

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
