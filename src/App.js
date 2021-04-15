import React, { useState } from "react";

import Input from "./components/Input/Input";
import UserList from "./components/UserList/UserList";
function App() {
  const [users, setUsers] = useState([]);
  const addUser = user => {
    user.id = `u${users.length}`;
    setUsers(prevState => [...prevState, user]);
  };

  return (
    <div>
      <Input addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
