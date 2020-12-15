import React from 'react';
import { connect } from 'react-redux';
import Counter from './RepositoriesCounter';
import { ExternalIcon } from '../icons';
import styled from 'styled-components'

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`

const UserInfo = ({owner}) => {
	if(owner){
		return (
			<div className="header user-info">
				<div className="avatar">
					<Avatar src={owner.avatar_url} alt={owner.login}></Avatar>
				</div>
				<div className="user">
					<h2>{owner.login}</h2>
					<a className="small-text" href={owner.html_url}>{owner.html_url} <ExternalIcon /></a>
				</div>
				<Counter />
			</div>
		)
	}
	return null;
};

const mapStateToProps = ({repositories}) => ({
	...repositories[0]
});

export default connect(mapStateToProps, null)(UserInfo);