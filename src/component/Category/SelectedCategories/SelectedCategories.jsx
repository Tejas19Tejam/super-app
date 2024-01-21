import styles from './SelectedCategories.module.css';
import AppLogo from '../../../ui/AppLogo';
import Item from './Item';

function SelectedCategories({ selectedCategories, setCategories }) {
	return (
		<div className={styles.leftBox}>
			<AppLogo />

			<h1 className={styles.headingPrimary}>
				Choose your entertainment category
			</h1>

			<ul className={styles.selectedCategoriesBox}>
				{selectedCategories.map((item) => (
					<Item
						key={item}
						name={item}
						onRemoveCategory={setCategories}
					/>
				))}
			</ul>
			<div className={styles.limitWarning}>
				{selectedCategories?.length < 3 && (
					<>
						<ion-icon
							name='warning-outline'
							class='icon'
						></ion-icon>
						<p>Minimum 3 category required</p>
					</>
				)}
			</div>
		</div>
	);
}

export default SelectedCategories;
