import styles from "./Userlist.module.css";
import { useRef } from "react";
const UserList = props => {
  let content = "";
  const listEl = useRef();
  if (props.users.length) {
    content = (
      <ul>
        <p>USERS</p>
        {props.users.map((user, i) => (
          <li key={user.id}>{`${i + 1}-${user.name} (${
            user.age
          } years old)`}</li>
        ))}
      </ul>
    );
    listEl.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
  } else content = "No users. Please add a user.";
 
   
  return (
    <div ref={listEl} className={styles.List}>
      {content}
    </div>
  );
};
export default UserList;
