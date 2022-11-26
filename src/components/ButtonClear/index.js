import styles from "./index.module.css";

const ButtonClear = (props) => (
  <button 
    className={styles.button_clear}
    onClick={props.handleClear}>
    {props.children}
  </button>
)

export default ButtonClear;