import styles from "./Button.module.css";

function Button({ disabled,children,A }) {
  return (
    <button disabled={disabled} className={styles.button} data-testid="button" onClick={A}>
      {children}
    </button>
  );
}

export default Button;
