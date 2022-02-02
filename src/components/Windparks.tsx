import React, { useEffect, useState } from "react";
// import { getWindparks } from "../services/windParks";
import { getWindparks } from "../services/fakeWindparks";
import { Windpark } from "../types/Windpark";
import { Windparkheader } from "../types/Windparkheader";
import "../styles/Windparks.css";
import { getWindparkheaders } from "../services/fakeWindparkheader";

interface Props {
  windparks: Windpark[];
  windparkheader: Windparkheader[];
}

function Windparks() {
  const [windparks, setWindparks] = useState<Windpark[]>();
  const [windparkheader, setWindparkheader] = useState<Windparkheader[]>();

  // useEffect(() => {
  //   async function fetchwindparks() {
  //     const { data: windparks } = await getWindparks();
  //     setWindparks(windparks);
  //   }
  //   fetchwindparks();
  // }, []);

  useEffect(() => {
    const windparks = getWindparks();
    setWindparks(windparks);
    const windparkheaders = getWindparkheaders();
    setWindparkheader(windparkheaders);
  }, []);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <div className="container">
        <h1>Windparks</h1>
      </div>
      <div className="parks">
        {windparkheader?.map((windparkheader) => (
          <span key={windparkheader.headerName} className="name">
            {windparkheader.headerName}
          </span>
        ))}
      </div>
      {windparks?.map((windpark) => (
        <div key={windpark.id} className="row">
          <span className="name">{windpark.windparkName}</span>
          <span className="address">{windpark.address.street}</span>
          <span className="zipcode">{windpark.address.zipcode}</span>
          <span className="contactName">
            {windpark.contactinformation.name}
          </span>
          <span className="contactEmail">
            {windpark.contactinformation.email}
          </span>
          <span className="contactMobile">
            {windpark.contactinformation.mobile}
          </span>
          <button onClick={handleClick} className="fas fa-trash-alt"></button>
        </div>
      ))}
      ;
    </>
  );
}

export default Windparks;
