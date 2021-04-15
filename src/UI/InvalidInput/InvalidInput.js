import styles from "./InvalidInput.module.css";
import Button from "../Button/Button";

const invalidInput = props => {
  return (
    <div className={styles.Invalid}>
      <h1>Inavlid Input</h1>
      <p>{props.message}</p>
      <Button>OK</Button>
    </div>
  );
};
export default invalidInput;
