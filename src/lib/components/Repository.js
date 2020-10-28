import React from 'react';
import { connect } from 'react-redux';

import { repositoryAddAction, repositoryRemoveAction } from '../actions/bookmarkActions';

import { Link } from "react-router-dom";

import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid #eee;
  margin: 20px;
`
const Name = styled.a`
  color: blue;
`
const Avatar = styled.img`
  border: 1px solid red;
  width: 100px;
  height: 100px;
`

const Repository = ( props ) => {

	const { id, name, full_name, description, html_url, stargazers_count, watchers_count, owner, is_bookmarked, showAvatar = true } = props
	const { repositoryAddAction, repositoryRemoveAction } = props
	const repository = { 
		id, 
		name, 
		full_name, 
		description, 
		html_url, 
		stargazers_count,
		watchers_count,
		owner,
		is_bookmarked
	}

	return (
	<Container key={id}>
		<div><Link to={`/user/${owner.login}`}>{owner.login}</Link></div>
		<Name href={html_url}>{name}</Name>
		<div>{full_name}</div>
		<div>{description} - {stargazers_count} - {watchers_count}</div>
		{showAvatar && <a href={owner.html_url}>
			<Avatar src={owner.avatar_url} alt="Hello world"></Avatar>
		</a>}
		{
			is_bookmarked
				? <button onClick={() => repositoryRemoveAction(id)}>Remove</button>
				: <button onClick={() => repositoryAddAction(repository)}>Add</button>
		}
	</Container>
)};

export default connect(null, {
	repositoryAddAction: repositoryAddAction,
	repositoryRemoveAction: repositoryRemoveAction,
})(Repository);
