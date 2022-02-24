import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { deleteWindFarm, getWindFarms } from "../services/windFarm";
import { WindFarm } from "../types/WindFarm";
import "../styles/WindFarms.css";

function WindFarms() {
  const [windFarms, setWindFarms] = useState<WindFarm[]>();

  useEffect(() => {
    async function fetchWindFarms() {
      const { data: windFarms } = await getWindFarms();
      setWindFarms(windFarms);
    }
    fetchWindFarms();
  }, []);

  const handleDelete = async (windFarm: WindFarm) => {
    const deletedWindFarm = windFarms?.filter((w) => w._id !== windFarm._id);
    setWindFarms(deletedWindFarm);

    await deleteWindFarm(windFarm._id);
  };

  return (
    <>
      <div className="image">
        <div className="container">
          <h1>Wind Farms</h1>
          <button className="windfarm-add-button">
            <NavLink to="/windfarm/new" className="new-windfarm">
              Add Wind Farm
            </NavLink>
          </button>
        </div>
        <div className="farms">
          <span className="name">Address</span>
          <span className="name">Troubleshooting Manual</span>
          <span className="name">Contact Information</span>
        </div>
        {windFarms?.map((windFarm) => (
          <div key={windFarm._id} className="row">
            <span className="address">{windFarm.address.street}</span>
            <span className="zipcode">{windFarm.address.zipcode}</span>
            <span className="manual">{windFarm.troubleshootingManual}</span>
            <span className="contactName">
              {windFarm.contactInformation.name}
            </span>
            <span className="contactEmail">
              {windFarm.contactInformation.email}
            </span>
            <span className="contactMobile">
              {windFarm.contactInformation.mobile}
            </span>
            <button
              onClick={() => handleDelete(windFarm)}
              className="fas fa-trash-alt"
            ></button>
          </div>
        ))}
        ;
      </div>
    </>
  );
}

export default WindFarms;
