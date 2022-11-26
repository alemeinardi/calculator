import styles from "./index.module.css";

function Button(props) {
  const isOperator = value => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  return (
    <button className={`${styles.button_container} ${isOperator(props.children) ? styles.operator : ''}`.trimEnd()}
      onClick={() => props.handleClick(props.children)}>
      {props.children}
    </button>
  );
}

export default Button;