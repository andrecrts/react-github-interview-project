import { Link } from "react-router-dom";

import RepositoriesCount from './RepositoriesCount';

const Navigation = ({showSearch = true, showBookmarks = true}) => (
	<ul>
		{showSearch && <li><Link to="/">Search</Link></li>}
		{showBookmarks && 
			<li>
				<Link to="/bookmarks">
					Bookmarks
					<RepositoriesCount source="bookmarks" />
				</Link>
			</li>
		}
	</ul>
)

export default Navigation;
