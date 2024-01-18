import Button from '../../Button/Button';
import styles from './CategoryList.module.css';
import CategoryItem from './CategoryItem';

const categoriesArray = [
	'action',
	'drama',
	'romance',
	'thriller',
	'western',
	'horror',
	'fantasy',
	'music',
	'fiction',
];

function CategoryList({ selectedCategories, setCategories }) {
	// Store selected categories in local storage
	function handleStoreCategories() {
		localStorage.setItem('categories', JSON.stringify(selectedCategories));
	}

	return (
		<div className={styles.rightBox}>
			<div className={styles.categoryContainer}>
				{categoriesArray.map((name) => (
					<CategoryItem
						key={name}
						onClickCategory={setCategories}
						isSelected={selectedCategories?.includes(name)}
						name={name}
					/>
				))}
			</div>
			<div className={styles.btnBox}>
				{selectedCategories.length >= 3 && (
					<Button handleClick={handleStoreCategories}>
						Next page
					</Button>
				)}
			</div>
		</div>
	);
}

export default CategoryList;
