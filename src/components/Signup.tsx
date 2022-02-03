import { useState } from "react";
import Joi from "joi";
import user from "../services/userService";
import auth from "../services/authService";
import useForm from "./common/Form";

export default function Signup() {
  const data = {};
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .label("Email"),
    password: Joi.string().min(6).required().label("Password"),
    name: Joi.string().min(3).required().label("Name"),
    type: Joi.string().min(3).required().label("Usertype"),
  });

  const doSubmit = async (data: any) => {
    console.log("doSubmit RAN", data);
    try {
      const { headers } = await user.register(data);
      auth.loginWithJwt(headers["x-auth-token"]);
      window.location.href = "/";
    } catch (error: any) {
      if (error.response.status === 400) {
        const errors = { email: error.response.data };
        setErrors({ errors });
      }
    }
  };

  const { renderDropDown, renderButton, renderInput, handleSubmit, setData } =
    useForm(data, schema, doSubmit);

  const type = [
    {
      name: "planner",
      _id: "1",
    },
    {
      name: "technician",
      _id: "2",
    },
  ];

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        {renderInput("email", "Email")}
        {renderInput("password", "Password", "password")}
        {renderInput("name", "Name")}
        {renderDropDown("type", "Vad är du för något?", type)}
        {renderButton("Submit")}
      </form>
    </>
  );
}
