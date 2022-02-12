import { useEffect, useState } from "react";
import { getWindFarms } from "../services/windFarm";
import { WindFarm } from "../types/WindFarm";
import "../styles/Windfarms.css";

function WindFarms() {
  const [windfarms, setWindFarms] = useState<WindFarm[]>();

  useEffect(() => {
    async function fetchWindFarms() {
      const { data: windfarms } = await getWindFarms();
      setWindFarms(windfarms);
    }
    fetchWindFarms();
  }, []);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <div className="image">
        <div className="container">
          <h1>Windfarms</h1>
        </div>
        <div className="farms">
          <span className="name">Address</span>
          <span className="name">Troubleshooting Manual</span>
          <span className="name">Contact Information</span>
        </div>
        {windfarms?.map((windfarm) => (
          <div key={windfarm._id} className="row">
            <span className="address">{windfarm.address.street}</span>
            <span className="zipcode">{windfarm.address.zipcode}</span>
            <span className="manual">{windfarm.troubleshootingManual}</span>
            <span className="contactName">
              {windfarm.contactInformation.name}
            </span>
            <span className="contactEmail">
              {windfarm.contactInformation.email}
            </span>
            <span className="contactMobile">
              {windfarm.contactInformation.mobile}
            </span>
            <button onClick={handleClick} className="fas fa-trash-alt"></button>
          </div>
        ))}
        ;
      </div>
    </>
  );
}

export default WindFarms;
