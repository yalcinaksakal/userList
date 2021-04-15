import { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./Input.module.css";

const Input = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
const [invalid,setInvalid]=useState({show:false,msg=""});
  const validate = () => {
    let isValid = true;
    let message = "Please enter";
    if (name.trim().length === 0) {
      isValid = false;
      message += " a valid name";
    }
    if (age.trim().length === 0) {
      message += isValid ? " a valid age" : " and a valid age";
      isValid = false;
    }
    if (!isValid) message += ". (non-empty values) ";
    else message = "";
    if (!Number.isInteger(+age.trim()) || +age.trim() < 0) {
      message += "Age must be a positive integer.";
      isValid = false;
    }

    return { ok: isValid, msg: message };
  };

  const submitHandler = e => {
    e.preventDefault();
    const validity = validate();
    if (validity.ok) props.addUser({ name: name, age: +age });
    else console.log(validity.msg);
  };
  const changeNameHandler = e => {
    setName(e.target.value);
  };
  const changeAgeHandler = e => {
    setAge(e.target.value);
  };
  return (
    <form className={styles.Form} onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input type="text" value={name} onChange={changeNameHandler} />
      </div>
      <div>
        <label>Age (Years)</label>
        <input type="text" value={age} onChange={changeAgeHandler} />
      </div>
      <Button>Add User</Button>
    </form>
  );
};
export default Input;
