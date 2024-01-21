import styles from './Notes.module.css';

function Notes() {
	return (
		<section className={`${styles.notes} border-radius--17`}>
			<p className={styles.notesHeading}>All notes</p>

			<textarea
				placeholder='Add your notes here...'
				className={styles.textarea}
				required
			/>
		</section>
	);
}

export default Notes;
