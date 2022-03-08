import React, { useEffect, useState } from "react";
import fakeTech from "../services/fakeTech";
import TabelBody from "./common/TableBody";
import TableFilter from "./TableFilter";
import { Column, SortColumns } from "../types/Table";
import { Technician } from "../types/TechnicianUpdated";
import "../styles/TechTable.css";
import FilterDropList from "./common/FilterDropList";
import FilterSingelOption from "./common/FilterSingelOption";

function TechTable() {
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [filterSchema, setfilterSchema] = useState<SortColumns>({
    available: false,
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
    safety1: false,
    safety2: false,
    safety3: false,
    safety4: false,
    safety5: false,
  });
  const [columns, setColumns] = useState<Column[]>([
    { path: "name", label: "Name" },
    { path: "company", label: "Company" },
    { path: "location", label: "Location" },
    {
      path: "available",
      label: "Available",
      filterContent: (column) => (
        <FilterSingelOption
          column={column}
          filterSchema={filterSchema}
          onFilter={handleFilter}
          icon="fas fa-user-check"
        />
      ),
    },
    {
      path: "workPermitNorway",
      label: "Work permit Norway",
      filterContent: (column) => (
        <FilterSingelOption
          column={column}
          filterSchema={filterSchema}
          onFilter={handleFilter}
          icon="fas fa-flag"
        />
      ),
    },
    {
      path: "safetyCourses",
      label: "Safety courses",
      filterContent: (column) => (
        <FilterDropList
          column={column}
          options={safetyOptions}
          filterSchema={filterSchema}
          onFilter={handleFilter}
        />
      ),
    },
    {
      path: "electricalCompetence",
      label: "Electrical competence",
      filterContent: (column) => (
        <FilterDropList
          column={column}
          options={electricalOptions}
          filterSchema={filterSchema}
          onFilter={handleFilter}
        />
      ),
    },

    {
      path: "driverLicense",
      label: "Driver license",
      filterContent: (column) => (
        <FilterDropList
          column={column}
          options={driverOptions}
          filterSchema={filterSchema}
          onFilter={handleFilter}
        />
      ),
    },
  ]);

  const safetyOptions = [
    { path: "safety1", label: "Safety1" },
    { path: "safety2", label: "Safety2" },
    { path: "safety3", label: "Safety3" },
    { path: "safety4", label: "Safety4" },
    { path: "safety5", label: "Safety5" },
  ];

  const electricalOptions = [
    { path: "electrical1", label: "Electrical1" },
    { path: "electrical2", label: "Electrical2" },
    { path: "electrical3", label: "Electrical3" },
    { path: "electrical4", label: "Electrical4" },
  ];

  const driverOptions = [
    { path: "a", label: "A" },
    { path: "b", label: "B" },
    { path: "be", label: "BE" },
    { path: "c", label: "C" },
    { path: "c1", label: "C1" },
  ];

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
      electrical1: technician.electricalCompetence.electrical1,
      electrical2: technician.electricalCompetence.electrical2,
      electrical3: technician.electricalCompetence.electrical3,
      electrical4: technician.electricalCompetence.electrical4,
      available: technician.available,
      selected: technician.selected,
      safety1: technician.safetyCourses.safety1,
      safety2: technician.safetyCourses.safety2,
      safety3: technician.safetyCourses.safety3,
      safety4: technician.safetyCourses.safety4,
      safety5: technician.safetyCourses.safety5,
    };
  };

  const filtered = getFiltered();

  return (
    <div className="tech-main">
      <div className="tech-filter">
        <TableFilter columns={columns} />
      </div>
      <div className={"tech-table"} style={{ cursor: "pointer" }}>
        <TabelBody data={filtered} columns={columns} onSelect={handleSelect} />
      </div>
    </div>
  );
}

export default TechTable;
