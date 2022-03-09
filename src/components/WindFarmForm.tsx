import useForm from "./common/Form";
import { useState, useEffect } from "react";
import { NewWindfarmType } from "../types/NewWindfarmType";
import { useHistory, useParams } from "react-router";
import { addWindFarm, getWindFarm } from "../services/windFarm";
import { CreateWindFarmData } from "../types/CreateWindfarmData";
import "../styles/NewWindfarm.css";
import "../styles/NewWindfarm.css";
const Joi = require("joi").extend(require("@joi/date"));

interface WindFarmForm {
  name: string;
  street: string;
  zipcode: string;
  city: string;
  county: string;
  country: string;
  company: string;
  hubHeight: string;
  elevatorType: string;
  commissioningDate: string;
  safetyEquipment: string;
  numberOfWindTurbines: string;
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
    city: "",
    county: "",
    country: "",
    company: "",
    hubHeight: "",
    elevatorType: "",
    commissioningDate: "",
    safetyEquipment: "",
    numberOfWindTurbines: "",
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
    city: Joi.string().min(2).required().label(NewWindfarmType.citySubject),
    county: Joi.string().min(2).required().label(NewWindfarmType.countySubject),
    country: Joi.string()
      .min(2)
      .required()
      .label(NewWindfarmType.countrySubject),
    company: Joi.string()
      .min(2)
      .required()
      .label(NewWindfarmType.companySubject),
    hubHeight: Joi.string()
      .min(2)
      .required()
      .label(NewWindfarmType.hubHeightSubject),
    elevatorType: Joi.string()
      .min(2)
      .required()
      .label(NewWindfarmType.elevatorSubject),
    commissioningDate: Joi.date()
      .format("YYYY-MM-DD")
      .required()
      .label(NewWindfarmType.commissioningDateSubject),
    safetyEquipment: Joi.string()
      .min(2)
      .required()
      .label(NewWindfarmType.safetyEquipmentSubject),
    numberOfWindTurbines: Joi.string()
      .min(2)
      .required()
      .label(NewWindfarmType.numberOfWindTurbinesSubject),
    troubleshootingManual: Joi.string()
      .min(10)
      .required()
      .label(NewWindfarmType.manualSubject),
  });

  function mapToViewDb(data: WindFarmForm): CreateWindFarmData {
    return {
      address: {
        name: data.name,
        street: data.street,
        zipcode: data.zipcode,
        city: data.city,
        county: data.county,
        country: data.country,
      },
      owner: {
        company: data.company,
      },
      troubleshootingManual: data.troubleshootingManual,
      windFarmDetails: {
        hubHeight: data.hubHeight,
        elevatorType: data.elevatorType,
        commissioningDate: data.commissioningDate,
        safetyEquipment: data.safetyEquipment,
        numberOfWindTurbines: data.numberOfWindTurbines,
      },
    };
  }

  function mapToViewModel(data: CreateWindFarmData): WindFarmForm {
    return {
      name: data.address.name,
      street: data.address.street,
      zipcode: data.address.zipcode,
      city: data.address.city,
      county: data.address.county,
      country: data.address.country,
      company: data.owner.company,
      hubHeight: data.windFarmDetails.hubHeight,
      elevatorType: data.windFarmDetails.elevatorType,
      commissioningDate: data.windFarmDetails.commissioningDate,
      safetyEquipment: data.windFarmDetails.safetyEquipment,
      numberOfWindTurbines: data.windFarmDetails.numberOfWindTurbines,
      troubleshootingManual: data.troubleshootingManual,
    };
  }

  const doSubmit = async (data: WindFarmForm) => {
    const windFarm = mapToViewDb(data);
    await addWindFarm(windFarm);
    history.replace("/windfarms");
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
        {renderInput("city", NewWindfarmType.citySubject)}
        {renderInput("county", NewWindfarmType.countySubject)}
        {renderInput("country", NewWindfarmType.countrySubject)}
        {renderInput("hubHeight", NewWindfarmType.hubHeightSubject)}
        {renderInput("elevatorType", NewWindfarmType.elevatorSubject)}
        {renderInput(
          "commissioningDate",
          NewWindfarmType.commissioningDateSubject
        )}
        {renderInput("safetyEquipment", NewWindfarmType.safetyEquipmentSubject)}
        {renderInput(
          "numberOfWindTurbines",
          NewWindfarmType.numberOfWindTurbinesSubject
        )}
        {renderInput("company", NewWindfarmType.companySubject)}
        {renderInput("troubleshootingManual", NewWindfarmType.manualSubject)}
        {renderButton(NewWindfarmType.button)}
      </form>
    </div>
  );
}
