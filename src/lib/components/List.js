import React from 'react';
import { connect } from 'react-redux';

import Repository from './Repository';

const List = ({items, showAvatar, showDelete}) => (
	<div className="list">
		{items.map((item, index) => (
			<Repository key={item.id} showAvatar={showAvatar} showDelete={showDelete} {...item} />
		))}
	</div>
);

const mapStateToProps = (state, { source, showAvatar }) => ({
	items: state[source],
	showAvatar: showAvatar,
	showDelete: source === 'bookmarks' ? true : false
});

export default connect(mapStateToProps, null)(List);
