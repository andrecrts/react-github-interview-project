import Search from '../components/Search';
import List from '../components/List';
import Navigation from '../components/Navigation';

const HomePage = () => (
	<div className="home-page">
		<Navigation 
			showSearch={false}/>
		<h2>Welcome</h2>
		<Search />
		<List source="repositories" />
	</div>
)

export default HomePage;
