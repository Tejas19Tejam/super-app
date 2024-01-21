import styles from './Button.module.css';

export default function Button({ handleClick, children }) {
	if (handleClick)
		return (
			<button
				type='submit'
				className={styles.button}
				onClick={handleClick}
			>
				{children}
			</button>
		);

	return (
		<button type='submit' className={styles.button}>
			{children}
		</button>
	);
}
