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
    { path: "available", label: "Available" },
    { path: "electricalCompetence", label: "Electrical competence" },
    { path: "electrical1", label: "Electrical1" },
    { path: "electrical2", label: "Electrical2" },
    { path: "electrical3", label: "Electrical3" },
    { path: "electrical4", label: "Electrical4" },
    { path: "workPermitNorway", label: "Work permit Norway" },
    { path: "driverLicense", label: "Driver license" },
    { path: "a", label: "A" },
    { path: "b", label: "B" },
    { path: "be", label: "BE" },
    { path: "c", label: "C" },
    { path: "c1", label: "C1" },
  ]);
  const [filterSchema, setfilterSchema] = useState<SortColumns>({
    workPermitNorway: false,
    a: false,
    b: false,
    be: false,
    c: false,
    c1: false,
    electrical1: false,
    electrical2: false,
    electrical3: false,
    electrical4: false,
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
        filtered = filtered.filter((technician) => {
          const technicianVm: any = mapToViewModel(technician);
          console.log(technicianVm);
          return technicianVm[key] === true;
        });
      }
    }
    return filtered;
  };

  const mapToViewModel = (technician: Technician) => {
    return {
      _id: technician._id,
      name: technician.name,
      company: technician.company,
      location: technician.location,
      electricalCompetence: technician.electricalCompetence,
      workPermitNorway: technician.workPermitNorway,
      a: technician.driverLicense.a,
      b: technician.driverLicense.b,
      be: technician.driverLicense.be,
      c: technician.driverLicense.c,
      c1: technician.driverLicense.c1,
      electrical1: technician.electricalCompetence.Electrical1,
      electrical2: technician.electricalCompetence.Electrical2,
      electrical3: technician.electricalCompetence.Electrical3,
      electrical4: technician.electricalCompetence.Electrical4,
      available: technician.available,
      selected: technician.selected,
    };
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
