import React from "react";
import { WindFarm } from "../../types/WindFarm";
import "../../styles/WindFarms.css";

interface Props {
  onDelete: (windFarm: WindFarm) => void;
  windFarms: WindFarm[] | undefined;
}

function WindFarmTableBody({ onDelete, windFarms }: Props) {
  return (
    <>
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
            onClick={() => onDelete(windFarm)}
            className="fas fa-trash-alt"
          ></button>
        </div>
      ))}
    </>
  );
}

export default WindFarmTableBody;
