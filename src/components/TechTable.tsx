import React, { useEffect, useState } from "react";
import fakeTech from "../services/fakeTech";
import TabelBody from "./common/TableBody";
import TabelHeader from "./common/TableHeader";
import { Column, SortColumns } from "../types/Table";
import { Technician } from "../types/TechnicianUpdated";

function FoodsTable() {
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [columns, setColumns] = useState<Column[]>([
    { path: "available", label: "Available " },
    { path: "electricalCompetence", label: "Electrical competence " },
    { path: "workPermitNorway", label: "Work permit Norway " },
    { path: "driverLicense", label: "Driver license " },
    { path: "specificTools", label: "Specific tools " },
    { path: "vanWithWinterTire", label: "Van with winter tire " },
    { path: "location", label: "Location" },
  ]);
  const [sortColumns, setSortColumns] = useState<SortColumns>({
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

  const handleSort = (path: String) => {
    for (const key in sortColumns) {
      if (key === path) {
        sortColumns[key] = !sortColumns[key];
      }
    }
    setSortColumns({ ...sortColumns });
  };

  const getFiltered = () => {
    let filtered = [...technicians];
    for (const key in sortColumns) {
      if (sortColumns[key] === true) {
        filtered = filtered.filter((technician) => technician[key] === true);
      }
    }
    return filtered;
  };

  const filtered = getFiltered();

  return (
    <table className={"table table-hover"}>
      <TabelHeader
        columns={columns}
        sortColumns={sortColumns}
        onSort={handleSort}
      />
      <TabelBody data={filtered} columns={columns} />
    </table>
  );
}

export default FoodsTable;
