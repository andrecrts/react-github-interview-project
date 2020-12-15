import React from 'react';
import { connect } from 'react-redux';
import { addAction, removeAction } from '../actions/bookmark';
import { BookmarkIcon, ExternalIcon, DeleteIcon } from '../icons';
import { Link } from "react-router-dom";
import styled from 'styled-components'
const Container = styled.div`

`
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`

const Repository = ( props ) => {

	const { id, name, full_name, description, html_url, stargazers_count, watchers_count, owner, is_bookmarked, showAvatar = true, showDelete = false } = props
	const { addAction, removeAction } = props
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
	<Container key={id} className="repository">

		{showAvatar && 
			<div className="avatar">
				<Link to={`/user/${owner.login}`} title={`Find more projects from ${name}`}>
					<Avatar src={owner.avatar_url} alt={full_name}></Avatar>
				</Link>
			</div>
		}

		<div className="information">
			<div className="title">
				<a href={html_url} target="_blank" rel="noreferrer" title={`Visit the project ${full_name} hosted in github`}>
					<span className="label">
						{name}
					</span>
					<ExternalIcon />
				</a>
			</div>
			<div className="author"><Link to={`/user/${owner.login}`} title={`Find more projects from ${name}`}>{owner.login}</Link></div>
			<p className="description">{description}</p>

			{
				is_bookmarked
				? <button className="button buttom-bookmark bookmarked" onClick={() => removeAction(id)}>{(showDelete) ? <DeleteIcon /> : <BookmarkIcon />}</button>
				: <button className="button buttom-bookmark" onClick={() => addAction(repository)}><BookmarkIcon /></button>
			}

		</div>
		
	</Container>
)};

export default connect(null, {
	addAction: addAction,
	removeAction: removeAction,
})(Repository);
