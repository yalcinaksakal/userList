import styles from "./InvalidInput.module.css";
import Button from "../Button/Button";

const invalidInput = props => {
  return (
    <div
      className={[styles.Invalid, props.show ? styles["slide-in"] : null].join(
        " "
      )}
    >
      <h1>Invalid Input</h1>
      <p>{props.msg}</p>
      <Button clicked={props.clicked}>OK</Button>
    </div>
  );
};
export default invalidInput;
