import React from 'react';

import RepositoriesCount from './RepositoriesCount';

const BookmarksInfo = () => (
	<div className="header bookmarks-info">
		<h2>Bookmarks</h2>
		<RepositoriesCount source="bookmarks" />
	</div>
);

export default BookmarksInfo;
