import styles from './Button.module.css';
export default function Button({ handleSubmit, children }) {
	return (
		<button type='submit' className={styles.button}>
			{children}
		</button>
	);
}
