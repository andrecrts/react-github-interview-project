import { Link } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';

const Navigation = ({showSearch = true, showBookmarks = true}) => (
	<ul className="navigation">
		<li className="navigation-item navigation-item-search">
			{showSearch && 
				<Link to="/" className="button button-side-left">
					<ArrowLeftIcon />
					<span>Search</span>
				</Link>
			}
		</li>
		<li className="navigation-item navigation-item-bookmarks">
			{showBookmarks && 
				<Link to="/bookmarks" className="button button-side-right">
					<span>Bookmarks</span>
					<ArrowRightIcon />
				</Link>
			}
		</li>
	</ul>
)

export default Navigation;