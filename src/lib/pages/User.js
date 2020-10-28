import List from '../components/List';
import Navigation from '../components/Navigation';

import { useParams } from "react-router-dom";

const UserPage = () => {

	let { user } = useParams();

	return (
		<div className="user-page">
			<Navigation />
			<h2>{user}</h2>
			<List source="repositories" showAvatar={false} />
		</div>
	);
}

export default UserPage;
