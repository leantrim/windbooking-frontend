import React, { useEffect, useState } from "react";
import { getTech } from "../services/techService";
import { Technician } from "../types/Technician";

function TechTable() {
  const [technicians, setTechnicians] = useState<[Technician]>();

  useEffect(() => {
    async function fetchTech() {
      const { data: technicians } = await getTech();
      setTechnicians(technicians);
    }
    fetchTech();
  }, []);

  return (
    <div>
      {technicians?.map((technician) => (
        <span>{technician.userID}</span>
      ))}
    </div>
  );
}

export default TechTable;
