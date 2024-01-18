import styles from './SelectedCategories.module.css';

function Item({ name, onRemoveCategory }) {
	return (
		<li className={styles.selectedCategory}>
			<p className={styles.categoryName}>{name}</p>
			<ion-icon
				name='close-outline'
				class={styles.icon}
				role='button'
				onClick={() => onRemoveCategory(name)}
			></ion-icon>
		</li>
	);
}

export default Item;
