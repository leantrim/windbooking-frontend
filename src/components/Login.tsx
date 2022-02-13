import { useState } from "react";
import Joi from "joi";
import auth from "../services/authService";
import useForm from "./common/Form";
import { LoginFormData } from "../types/Login";
import { LoginType } from "../types/LoginFormType";
import { useLocation } from "react-router-dom";
import "../styles/Login.css";

interface stateType {
  from: { pathname: string };
}

export default function Login() {
  const data = { email: "", password: "" };
  const [errors, setErrors] = useState<any>();
  const { state } = useLocation<stateType>();

  const className = LoginType.classname;

  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .label(LoginType.emailSubject),
    password: Joi.string().min(6).required().label(LoginType.passwordSubject),
  });

  const doSubmit = async (data: LoginFormData) => {
    try {
      await auth.login(data);
      window.location.href = state ? state.from.pathname : "/windfarm";
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        const errors = error.response.data;
        setErrors(errors);
      }
    }
  };

  const { renderButton, renderInput, handleSubmit } = useForm(
    data,
    schema,
    doSubmit,
    className
  );

  return (
    <div className={className + "-container"}>
      <form onSubmit={handleSubmit} className={className + "-form-container"}>
        <h1 className={className + "-signup-title"}> {LoginType.title}</h1>
        {errors && <h4 className="login-errorresponse">{errors}</h4>}
        {renderInput("email", LoginType.emailSubject)}
        {renderInput("password", LoginType.passwordSubject, "password")}
        {renderButton(LoginType.button)}
        <h5 className="has-account">Forgotten your password? Click here</h5>
      </form>
    </div>
  );
}
