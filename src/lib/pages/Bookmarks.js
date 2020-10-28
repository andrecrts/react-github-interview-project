import List from '../components/List';
import Navigation from '../components/Navigation';
import BookmarksInfo from '../components/BookmarksInfo';

const BookmarksPage = () => (
	<div className="bookmarks-page">
		<Navigation 
			showBookmarks={false} />
		<BookmarksInfo />
		<List source="bookmarks" />
	</div>
)

export default BookmarksPage;
