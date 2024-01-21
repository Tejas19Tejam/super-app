import ProfilePhoto from './ProfilePhoto';
import styles from './ProfileCard.module.css';
import Categories from './Categories';
import { useEffect } from 'react';
import { useState } from 'react';

function ProfileCard() {
	const [formData, setFormData] = useState('');

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('formData'));
		setFormData(data);
	}, []);

	return (
		<section className={`${styles.profile} border-radius--17`}>
			<ProfilePhoto />
			<div className={styles.profileInfo}>
				<p className={styles.name}>{formData.name}</p>
				<p className={styles.mail}>{formData.email}</p>
				<p className={styles.username}>{formData.username}</p>

				<Categories />
			</div>
		</section>
	);
}

export default ProfileCard;
