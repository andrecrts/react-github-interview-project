import List from '../components/List';
import Navigation from '../components/Navigation';

const BookmarksPage = () => (
	<div className="bookmarks-page">
		<Navigation 
			showBookmarks={false} />
		<List source="bookmarks" />
	</div>
)

export default BookmarksPage;