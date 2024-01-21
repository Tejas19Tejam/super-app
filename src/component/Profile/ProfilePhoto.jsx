import styles from './ProfileCard.module.css';

function ProfilePhoto() {
	return (
		<div className={styles.photoContainer}>
			<img
				src='./images/profile-photo.png'
				alt='profile picture'
				className={styles.profilePhoto}
			/>
		</div>
	);
}

export default ProfilePhoto;
