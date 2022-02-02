import React, { useEffect, useState } from "react";
import { getWindparks } from "../services/fakeWindparks";
import { Windpark } from "../types/Windpark";
import "../styles/Windparks.css";

interface Props {
  windparks: Windpark[];
}

function Windparks() {
  const [windparks, setWindparks] = useState<Windpark[]>();

  useEffect(() => {
    const windparks = getWindparks();
    setWindparks(windparks);
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
        <span className="name">Windpark Name</span>
        <span className="name">Address</span>
        <span className="name">Contact Information</span>
      </div>
      {windparks?.map((windpark) => (
        <div key={windpark.id} className="row">
          <span className="info">{windpark.windparkName}</span>
          <span className="info">{windpark.address}</span>
          <span className="info">{windpark.contactinformation}</span>
          <button onClick={handleClick} className="fas fa-trash-alt"></button>
        </div>
      ))}
      ;
    </>
  );
}

export default Windparks;
