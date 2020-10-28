import List from '../components/List';
import Navigation from '../components/Navigation';

const BookmarksPage = () => (
	<div className="bookmarks-page">
		<Navigation />
		<h2>Bookmarks</h2>
		<List source="bookmarks" />
	</div>
)

export default BookmarksPage;
