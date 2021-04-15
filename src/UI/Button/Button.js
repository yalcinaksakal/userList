import styles from "./Button.module.css";
const input = props => {
  return (
    <button className={styles.Button} onClick={props.clicked}>
      {props.children}
    </button>
  );
};
export default input;
