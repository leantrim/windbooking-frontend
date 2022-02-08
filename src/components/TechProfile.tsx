import React from "react";
import useForm from "./common/Form";
import Joi from "joi";
import { RegisterType } from "../types/RegisterFormType";

function TechProfile() {
  const data = {};

  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .label(RegisterType.emailSubject),
    name: Joi.string().min(3).required().label(RegisterType.nameSubject),
  });

  const doSubmit = () => {
    console.log("submited");
  };

  const className = "profile";

  const { renderInput, renderButton, handleSubmit } = useForm(
    data,
    schema,
    doSubmit,
    className
  );

  return (
    <div className={className + "-container"}>
      <form className={className + "-form-container"} onSubmit={handleSubmit}>
        {renderInput("name", "Name")}
        {renderInput("email", "Email")}
        {renderButton("save")}
      </form>
    </div>
  );
}

export default TechProfile;
