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
		<div className={styles.profile}>
			<ProfilePhoto />
			<div className={styles.profileInfo}>
				<p className={styles.name}>{formData.name}</p>
				<p className={styles.mail}>{formData.email}</p>
				<p className={styles.username}>{formData.username}</p>

				<Categories />
			</div>
		</div>
	);
}

export default ProfileCard;
