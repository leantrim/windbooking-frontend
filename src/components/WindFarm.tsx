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
            <NavLink to="/windfarm/new" className="new-windfarm">
              Add Wind Farm
            </NavLink>
          </button>
        </div>
        <div className="farms">
          <span className="name">Address</span>
          <span className="name">Troubleshooting Manual</span>
          <span className="name">Wind Farm Details</span>
        </div>
        {windFarms?.map((windFarm) => (
          <div key={windFarm._id} className="row">
            <NavLink to={`/windfarm/${windFarm._id}`} className="name">
              {windFarm.address.name}
            </NavLink>
            <span className="street">{windFarm.address.street}</span>
            <span className="zipcode">{windFarm.address.zipcode}</span>
            <span className="city">{windFarm.address.city}</span>
            <span className="county">{windFarm.address.county}</span>
            <span className="country">{windFarm.address.country}</span>
            <span className="company">{windFarm.owner.company}</span>
            <span className="manual">{windFarm.troubleshootingManual}</span>
            <span className="hub-height">
              {windFarm.windFarmDetails.hubHeight}
            </span>
            <span className="elevator-type">
              {windFarm.windFarmDetails.elevatorType}
            </span>
            <span className="commissioning-date">
              {windFarm.windFarmDetails.commissioningDate}
            </span>
            <span className="safety-equipment">
              {windFarm.windFarmDetails.safetyEquipment}
            </span>
            <span className="number-of-wt">
              {windFarm.windFarmDetails.numberOfWindTurbines}
            </span>
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
