import styles from './Category.module.css';
import CategoryList from './CategoryList/CategoryList';
import SelectedCategories from './SelectedCategories/SelectedCategories';

import { useState } from 'react';

function Category() {
	const [selectedCategories, setSelectedCategories] = useState([]);

	function handleOnClickCategory(value) {
		if (!selectedCategories.includes(value))
			return setSelectedCategories((array) => [...array, value]);

		setSelectedCategories((array) =>
			array.filter((item) => item !== value)
		);
	}

	return (
		<section className={styles.container}>
			<SelectedCategories
				selectedCategories={selectedCategories}
				setCategories={handleOnClickCategory}
			/>
			<CategoryList
				selectedCategories={selectedCategories}
				setCategories={handleOnClickCategory}
			/>
		</section>
	);
}

export default Category;
