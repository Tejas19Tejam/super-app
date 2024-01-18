import styles from './CategoryList.module.css';

function CategoryItem({ onClickCategory, isSelected, name }) {
	return (
		<div
			role='button'
			className={`${styles.category} ${styles[`${name}Category`]} ${
				isSelected && styles.selected
			}`}
			onClick={() => onClickCategory(name)}
		>
			<p className={styles.type}>{name}</p>
			<img
				src={`/images/categories/${name}-category.png`}
				alt='action category '
				className={styles.image}
			/>
		</div>
	);
}

export default CategoryItem;
