import Joi from "joi";
import useForm from "./common/Form";
import { useState, useEffect } from "react";
import { NewWindfarmType } from "../types/NewWindfarmType";
import { useHistory, useParams } from "react-router";
import { addWindFarm, getWindFarm } from "../services/windFarm";
import { CreateWindFarmData } from "../types/CreateWindfarmData";
import "../styles/NewWindfarm.css";
import "../styles/NewWindfarm.css";

interface WindFarmForm {
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

interface RouteParams {
  id: string;
}

export default function NewWindFarm() {
  const initialData = {
    name: "",
    street: "",
    zipcode: "",
    email: "",
    mobile: "",
    troubleshootingManual: "",
  };
  const [errors, setErrors] = useState<any>();
  const history = useHistory<stateType>();
  const className = NewWindfarmType.classname;
  const { id } = useParams<RouteParams>();

  async function populateWindFarm() {
    if (id !== "new") {
      const { data: windFarm } = await getWindFarm(id);

      const viewModel = mapToViewModel(windFarm);
      setData(viewModel);
    }
  }

  useEffect(() => {
    populateWindFarm();
  }, []);

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

  function mapToViewDb(data: WindFarmForm): CreateWindFarmData {
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

  function mapToViewModel(data: CreateWindFarmData): WindFarmForm {
    return {
      street: data.address.street,
      zipcode: data.address.zipcode,
      name: data.contactInformation.name,
      email: data.contactInformation.email,
      mobile: data.contactInformation.mobile,
      troubleshootingManual: data.troubleshootingManual,
    };
  }

  const doSubmit = async (data: WindFarmForm) => {
    const windFarm = mapToViewDb(data);
    await addWindFarm(windFarm);
    history.replace("/windfarm");
  };

  const { renderButton, renderInput, handleSubmit, setData } = useForm(
    initialData,
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
