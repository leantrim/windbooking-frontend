import React, { useEffect, useState } from "react";
import { getTech } from "../services/techService";
import { Technician } from "../types/Technician";

function TechTable() {
  const [technician, setTechnician] = useState<[Technician]>([{}]);
  useEffect(() => {
    const fetchTech = async () => {
      try {
        const data: any = await getTech();
        setTechnician(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTech();
  }, []);

  return <div>hej</div>;
}

export default TechTable;
