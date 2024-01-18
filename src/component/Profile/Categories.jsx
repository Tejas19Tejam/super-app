import { useEffect, useState } from 'react';
import styles from './ProfileCard.module.css';

function Categories() {
	const [categories, setCategories] = useState(null);

	useEffect(() => {
		if (categories) return;
		const data = JSON.parse(localStorage.getItem('categories'));
		setCategories(data);
	}, [categories]);

	if (categories?.length === 0 || categories === null) return;

	return (
		<ul className={styles.categories}>
			{categories.map((item) => (
				<li className={styles.categoryItem} key={item}>
					{item}
				</li>
			))}
		</ul>
	);
}

export default Categories;
