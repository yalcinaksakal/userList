import styles from "./BackDrop.module.css";

const backDrop = props => (
  <div
    className={[
      styles["back-drop"],
      props.show ? styles["slide-in"] : null,
    ].join(" ")}
    onClick={props.clicked}
  ></div>
);
export default backDrop;
