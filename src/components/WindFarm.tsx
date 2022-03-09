import { useEffect, useState } from "react";
import { Link as NavLink } from "react-router-dom";
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
            <NavLink to="/windfarms/new" className="new-windfarm">
              Add Wind Farm
            </NavLink>
          </button>
        </div>
        <div className="farms">
          <span className="name">Address</span>
          <span className="name"></span>
          <span className="name">Wind Farm Details</span>
          <span></span>
        </div>
        {windFarms?.map((windFarm) => (
          <div key={windFarm._id} className="row">
            <NavLink to={`/windfarms/${windFarm._id}`} className="name">
              {windFarm.address.name}
            </NavLink>
            <div className="address">
              <span className="street">{windFarm.address.street}</span>
              <span className="zipcode">
                {windFarm.address.zipcode} {windFarm.address.city}
              </span>
              <span className="county">{windFarm.address.county}</span>
              <span className="country">{windFarm.address.country}</span>
            </div>
            <span className="company">
              <h4>Company</h4>
              {windFarm.owner.company}
            </span>
            <span className="manual">
              <h4>Troubleshooting Manual</h4>
              {windFarm.troubleshootingManual}
            </span>
            <div className="windturbine-details">
              <span className="hub-height">
                <h4>Hub Height</h4>
                {windFarm.windFarmDetails.hubHeight}
              </span>
              <span className="number-of-wt">
                <h4>Number of Wind Turbines</h4>
                {windFarm.windFarmDetails.numberOfWindTurbines}
              </span>
            </div>
            <span className="commissioning-date">
              <h4>Commissioning Date</h4>
              {windFarm.windFarmDetails.commissioningDate}
            </span>
            <div className="safety-details">
              <span className="elevator-type">
                <h4>Elevator Type</h4>
                {windFarm.windFarmDetails.elevatorType}
              </span>
              <span className="safety-equipment">
                <h4>Required Safety Equipment</h4>
                {windFarm.windFarmDetails.safetyEquipment}
              </span>
            </div>

            <button
              onClick={() => handleDelete(windFarm)}
              className="fas fa-trash-alt"
            ></button>
          </div>
        ))}
      </div>
    </>
  );
}

export default WindFarms;
