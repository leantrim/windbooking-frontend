import { useState } from "react";
import Joi from "joi";
import useForm from "./common/Form";
import { NewWindfarmType } from "../types/NewWindfarmType";
import "../styles/NewWindfarm.css";
import { useHistory } from "react-router";
import { addWindparks } from "../services/windParks";
import "../styles/NewWindfarm.css";
import { CreateWindfarmData } from "../types/CreateWindfarmData";

interface WindparkForm {
  name: string;
  street: string;
  zipcode: string;
  email: string;
  mobile: string;
  troubleshootingManual: string;
}

interface stateType {
  from: { pathname: string };
}

export default function NewWindfarm() {
  const data = {
    name: "",
    street: "",
    zipcode: "",
    email: "",
    mobile: "",
    troubleshootingManual: "",
  };
  const [errors, setErrots] = useState<any>();
  const history = useHistory<stateType>();

  const className = NewWindfarmType.classname;

  const schema = Joi.object({
    name: Joi.string().min(2).required().label(NewWindfarmType.nameSubject),
    street: Joi.string().min(3).required().label(NewWindfarmType.streetSubject),
    zipcode: Joi.string()
      .min(5)
      .required()
      .label(NewWindfarmType.zipcodeSubject),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .label(NewWindfarmType.emailSubject),
    mobile: Joi.string()
      .min(10)
      .required()
      .label(NewWindfarmType.mobileSubject),
    troubleshootingManual: Joi.string()
      .min(10)
      .required()
      .label(NewWindfarmType.manualSubject),
  });

  function mapToViewModel(data: WindparkForm): CreateWindfarmData {
    return {
      address: {
        street: data.street,
        zipcode: data.zipcode,
      },
      contactInformation: {
        name: data.name,
        email: data.email,
        mobile: data.mobile,
      },
      troubleshootingManual: data.troubleshootingManual,
    };
  }

  const doSubmit = async (data: WindparkForm) => {
    const windpark = mapToViewModel(data);
    await addWindparks(windpark);
    history.replace("/windparks");
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
        <h1 className={className + "-title"}>{NewWindfarmType.title}</h1>
        {errors && <h4 className="login-errorresponse">{errors}</h4>}
        {renderInput("name", NewWindfarmType.nameSubject)}
        {renderInput("street", NewWindfarmType.streetSubject)}
        {renderInput("zipcode", NewWindfarmType.zipcodeSubject)}
        {renderInput("email", NewWindfarmType.emailSubject)}
        {renderInput("mobile", NewWindfarmType.mobileSubject)}
        {renderInput("troubleshootingManual", NewWindfarmType.manualSubject)}
        {renderButton(NewWindfarmType.button)}
      </form>
    </div>
  );
}
