import styles from "./BackDrop.module.css";

const backDrop = props => (
  <div
    className={[
      styles["back-drop"],
      props.show ? styles["slide-in"] : null,
    ].join(" ")}
  ></div>
);
export default backDrop;
