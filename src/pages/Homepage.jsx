import { Link } from 'react-router-dom';

function Homepage() {
	return (
		<div>
			<h1>Homepage</h1>
			<Link to='/category'>Go to category</Link>
		</div>
	);
}

export default Homepage;
