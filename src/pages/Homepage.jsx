import styles from './Homepage.module.css';
import ProfileCard from '../component/Profile/ProfileCard';
// import TodayInfo from '../component/TodayInfo/TodayInfo';
// import NewsFeed from '../component/News/NewsFeed';

function Homepage() {
	return (
		<section className={styles.homepage}>
			<ProfileCard />

			<div className={styles.todayInfo}>
				<h1>TODAY INFO </h1>
			</div>

			<div className={styles.news}>
				<h1>News Feed </h1>
			</div>
		</section>
	);
}

export default Homepage;
