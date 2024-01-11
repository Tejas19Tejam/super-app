import React from "react";
import styles from './Button.module.css'
export default function Button({handleSubmit}) {

    return (
        <button type="submit" className={styles.button}>
            SIGN UP
        </button>
    );
}
