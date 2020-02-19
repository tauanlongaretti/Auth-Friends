import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
  };

  login = e => {
      e.preventDefault();
      axiosWithAuth()
        .post("/login", this.state.credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            this.props.history.push("/protected");
        })
        .catch(err => {
            localStorage.removeItem("token");
            console.log("invalid login: ", err);
        });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            ></input>
          </label>
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
