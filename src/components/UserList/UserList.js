import styles from "./Userlist.module.css";

const userList = props => {
  let content = "";
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
  } else content = "No users. Please add a user.";

  return <div className={styles.List}>{content}</div>;
};
export default userList;
