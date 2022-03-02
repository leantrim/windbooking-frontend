import React, { useEffect, useState } from "react";
import fakeTech from "../services/fakeTech";
import TabelBody from "./common/TableBody";
import TabelHeader from "./common/TableHeader";
import { Column, SortColumns } from "../types/Table";
import { Technician } from "../types/TechnicianUpdated";
import "../styles/TechTable.css";

function TechTable() {
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [columns, setColumns] = useState<Column[]>([
    { path: "name", label: "Name" },
    { path: "company", label: "Company" },
    { path: "location", label: "Location" },
    { path: "available", label: "Available " },
    { path: "electricalCompetence", label: "Electrical competence " },
    { path: "workPermitNorway", label: "Work permit Norway " },
    { path: "driverLicense", label: "Driver license " },
    { path: "specificTools", label: "Specific tools " },
    { path: "vanWithWinterTire", label: "Van with winter tire " },
  ]);
  const [filterSchema, setfilterSchema] = useState<SortColumns>({
    electricalCompetence: false,
    workPermitNorway: false,
    driverLicense: false,
    specificTools: false,
    vanWithWinterTire: false,
    available: false,
  });

  useEffect(() => {
    setTechnicians(fakeTech);
  }, []);

  const handleSelect = (technician: Technician) => {
    const index = technicians.indexOf(technician);
    technicians[index].selected = !technician.selected;
    setTechnicians([...technicians]);
  };

  const handleFilter = (path: String) => {
    for (const key in filterSchema) {
      if (key === path) {
        filterSchema[key] = !filterSchema[key];
      }
    }
    setfilterSchema({ ...filterSchema });
  };

  const getFiltered = () => {
    let filtered = [...technicians];
    for (const key in filterSchema) {
      if (filterSchema[key] === true) {
        filtered = filtered.filter((technician) => technician[key] === true);
      }
    }
    return filtered;
  };

  const filtered = getFiltered();

  return (
    <div className="tech-main">
      <div className="tech-filter">
        <TabelHeader
          columns={columns}
          filterSchema={filterSchema}
          onFilter={handleFilter}
        />
      </div>
      <div className={"tech-table"} style={{ cursor: "pointer" }}>
        <TabelBody data={filtered} columns={columns} onSelect={handleSelect} />
      </div>
    </div>
  );
}

export default TechTable;
