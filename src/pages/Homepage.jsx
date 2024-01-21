import styles from './Homepage.module.css';
import ProfileCard from '../component/Profile/ProfileCard';
import Notes from '../component/Notes/Notes';
import TodayInfo from '../component/TodayInfo/TodayInfo';
import NewsFeed from '../component/News/NewsFeed';

function Homepage() {
	return (
		<main className={styles.homepage}>
			<ProfileCard />
			<Notes />
			<TodayInfo />

			<section className={`${styles.timer} border-radius--17`}>
				<p>Timer</p>
			</section>

			<article className={`${styles.news} border-radius--17`}>
				<figure className={styles.news__image}>
					<img
						src='/images/mount-everest.png'
						alt='Mount Everest Image'
						className={styles.image}
					/>
					<div className={styles.news__details}>
						<p className={styles.news__title}>
							This is mount everest This is mount everest This is
							mount everest
						</p>
						<p className={styles[`news__date-and-time`]}>
							2-04-2024 | 07:45 AM
						</p>
					</div>
				</figure>
				<div className={styles.news__textBox}>
					<p className={styles.news__text}>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
						It was popularised
					</p>
				</div>
			</article>
		</main>
	);
}

export default Homepage;
