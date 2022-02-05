import React from "react";
import Joi from "joi";
import "../styles/Login.css";

function Login() {
  // const schema = Joi.object({
  //   username: Joi.string().min(5).max(50).required().label("Username"),
  //   password: Joi.string().min(6).max(255).required().label("Password"),
  // });

  return (
    <body>
      <h2>Login Page</h2>
      <div className="login">
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          id="Uname"
          required
        ></input>

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="Pass"
          required
        ></input>

        <input type="button" name="log" id="Log" value="Login"></input>
      </div>
    </body>
  );
}

export default Login;
