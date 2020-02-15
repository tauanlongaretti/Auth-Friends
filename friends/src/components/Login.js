import React, { useState } from "react";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <label>
        Username:
        <input type="text"></input>
      </label>
      <label>
        Password:
        <input type="text"></input>
      </label>
      <button type="submit">Login</button>
    </div>
  );
};

export default Login;
