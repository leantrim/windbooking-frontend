import { useState } from "react";
import Joi from "joi";
import user from "../services/userService";
import auth from "../services/authService";
import useForm from "./common/Form";
import { DoSubmit } from "../types/Signup";
import { UserType, RegisterType } from "../types/RegisterFormType";
import "../styles/Signup.css";

export default function Signup() {
  const data = {};
  const [errors, setErrors] = useState<any>();

  const className = RegisterType.classname;

  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .label(RegisterType.emailSubject),
    password: Joi.string()
      .min(6)
      .required()
      .label(RegisterType.passwordSubject),
    name: Joi.string().min(3).required().label(RegisterType.nameSubject),
    userType: Joi.string()
      .required()
      .valid(UserType.planner, UserType.technician)
      .label(RegisterType.userType),
  });

  const doSubmit = async (data: DoSubmit) => {
    try {
      const { headers } = await user.register(data);
      auth.loginWithJwt(headers["x-auth-token"]);
      window.location.href = "/";
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        const errors = error.response.data;
        setErrors(errors);
      }
    }
  };

  const { renderDropDown, renderButton, renderInput, handleSubmit } = useForm(
    data,
    schema,
    doSubmit,
    className
  );

  const type = [
    {
      name: UserType.select,
      selected: true,
    },
    {
      name: UserType.planner,
    },
    {
      name: UserType.technician,
    },
  ];

  return (
    <div className={className + "-container"}>
      <form onSubmit={handleSubmit} className={className + "-form-container"}>
        <h1 className={className + "-signup-title"}> {RegisterType.title}</h1>
        {errors && <h4 className="register-errorresponse">{errors}</h4>}
        {renderInput("email", RegisterType.emailSubject)}
        {renderInput("password", RegisterType.passwordSubject, "password")}
        {renderInput("name", RegisterType.nameSubject)}
        {renderDropDown("userType", RegisterType.typeQuestion, type)}
        {renderButton(RegisterType.button)}
        <h5 className="has-account">Har du redan ett konto? Logga in här</h5>
      </form>
    </div>
  );
}
