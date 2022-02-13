import React, { useEffect, useState } from "react";
import { deleteWindpark, getWindparks } from "../services/windParks";
import { Windpark } from "../types/Windpark";
import "../styles/Windparks.css";
import { NavLink } from "react-router-dom";

function Windparks() {
  const [windparks, setWindparks] = useState<Windpark[]>();

  useEffect(() => {
    async function fetchwindparks() {
      const { data: windparks } = await getWindparks();
      setWindparks(windparks);
    }
    fetchwindparks();
  }, []);

  const handleDelete = async (windpark: any) => {
    const deletedWindpark = windparks?.filter((w) => w._id !== windpark._id);
    setWindparks(deletedWindpark);

    await deleteWindpark(windpark._id);
  };

  console.log(windparks);

  return (
    <>
      <div className="image">
        <div className="container">
          <h1>Wind Farms</h1>
          <button className="windfarm-button">
            <NavLink to="/windfarm/new" className="new-windfarm">
              Add Wind Farm
            </NavLink>
          </button>
        </div>
        <div className="parks">
          <span className="name">Address</span>
          <span className="name">Troubleshooting Manual</span>
          <span className="name">Contact Information</span>
        </div>
        {windparks?.map((windpark) => (
          <div key={windpark._id} className="row">
            <span className="address">{windpark.address.street}</span>
            <span className="zipcode">{windpark.address.zipcode}</span>
            <span className="manual">{windpark.troubleshootingManual}</span>
            <span className="contactName">
              {windpark.contactInformation.name}
            </span>
            <span className="contactEmail">
              {windpark.contactInformation.email}
            </span>
            <span className="contactMobile">
              {windpark.contactInformation.mobile}
            </span>
            <button
              onClick={() => handleDelete(windpark)}
              className="fas fa-trash-alt"
            ></button>
          </div>
        ))}
        ;
      </div>
    </>
  );
}

export default Windparks;
