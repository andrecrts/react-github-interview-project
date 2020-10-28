import React from 'react';
import { connect } from 'react-redux';

import Repository from './Repository';

const List = ({items, showAvatar}) => (
	<div className="list">
		{items.map((item, index) => (
			<Repository key={item.id} showAvatar={showAvatar} {...item} />
		))}
	</div>
);

const mapStateToProps = (state, { source, showAvatar }) => ({
	items: state[source],
	showAvatar: showAvatar
});

export default connect(mapStateToProps, null)(List);
