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
    console.log("click", path);
    switch (path) {
      case "electricalCompetence":
        sortColumns.electricalCompetence = !sortColumns.electricalCompetence;
        setSortColumns({ ...sortColumns });
        break;
      case "workPermitNorway":
        sortColumns.workPermitNorway = !sortColumns.workPermitNorway;
        setSortColumns({ ...sortColumns });
        break;
      case "driverLicense":
        sortColumns.driverLicense = !sortColumns.driverLicense;
        setSortColumns({ ...sortColumns });
        break;
      case "specificTools":
        sortColumns.specificTools = !sortColumns.specificTools;
        setSortColumns({ ...sortColumns });
        break;
      case "vanWithWinterTire":
        sortColumns.vanWithWinterTire = !sortColumns.vanWithWinterTire;
        setSortColumns({ ...sortColumns });
        break;
      case "available":
        sortColumns.available = !sortColumns.available;
        setSortColumns({ ...sortColumns });
        break;

      default:
        break;
    }

    for (const key in sortColumns) {
      if (sortColumns[key] === true) {
        const sorted = technicians.filter((technician) => {
          return technician[key] === true;
        });
        setTechnicians(sorted);
      }
    }
  };

  return (
    <table className={"table table-hover"}>
      <TabelHeader
        columns={columns}
        sortColumns={sortColumns}
        onSort={handleSort}
      />
      <TabelBody data={technicians} columns={columns} />
    </table>
  );
}

export default FoodsTable;
