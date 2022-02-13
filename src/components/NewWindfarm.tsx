import { useState } from "react";
import Joi from "joi";
import useForm from "./common/Form";
import "../styles/NewWindfarm.css";
import { NewWindfarmType } from "../types/RegisterFormType";
import { UseForm } from "../types/Signup";

function newWindfarm() {
  const data = {};
  const [errors, setErrors] = useState<any>();

  const className = NewWindfarmType.classname;

  const schema = Joi.object({
    name: Joi.string().min(2).required().label(NewWindfarmType.nameSubject),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label(NewWindfarmType.emailSubject),
    mobile: Joi.string()
      .min(10)
      .required()
      .label(NewWindfarmType.mobileSubject),
    street: Joi.string().min(3).required().label(NewWindfarmType.streetSubject),
    zipcode: Joi.string()
      .min(5)
      .required()
      .label(NewWindfarmType.zipcodeSubject),
  });

  const doSubmit = async (data: UseForm) => {};

  const { renderButton, renderInput, handleSubmit } = useForm(
    data,
    schema,
    doSubmit,
    className
  );

  return (
    <div className={className + "-container"}>
      <form onSubmit={handleSubmit} className={className + "-form-container"}>
        <h1 className={className + "-signup-title"}>
          {" "}
          {NewWindfarmType.title}
        </h1>
        {errors && <h4 className="register-errorresponse">{errors}</h4>}
        {renderInput("Name", NewWindfarmType.nameSubject)}
        {renderInput("Email", NewWindfarmType.emailSubject)}
        {renderInput("Mobile", NewWindfarmType.mobileSubject)}
        {renderInput("Street", NewWindfarmType.streetSubject)}
        {renderButton(NewWindfarmType.button)}
      </form>
    </div>
  );
}

export default newWindfarm;
