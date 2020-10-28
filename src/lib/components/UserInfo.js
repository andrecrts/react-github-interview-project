import React from 'react';
import { connect } from 'react-redux';

import RepositoriesCount from './RepositoriesCount';

const UserInfo = ({owner}) => {
	if(owner){
		return (
			<div>
				<img src={owner.avatar_url} alt="Hello world"></img>
				<div>{owner.login}</div>
				<a href={owner.html_url}>{owner.html_url}</a>
				<RepositoriesCount />
			</div>
		)
	}
	return null;
};

const mapStateToProps = ({repositories}) => ({
	...repositories[0]
});

export default connect(mapStateToProps, null)(UserInfo);
