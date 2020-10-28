import { Link } from "react-router-dom";

const Navigation = () => (
	<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/bookmarks">Bookmarks</Link></li>
	</ul>
)

export default Navigation;
