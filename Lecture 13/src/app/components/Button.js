// src/components/Button.js
import styles from '../style/Button.module.css';

export default function Button({ children, secondary }) {
  return (
    <button className={secondary ? styles.buttonSecondary : styles.button}>
      {children}
    </button>
  );
}
