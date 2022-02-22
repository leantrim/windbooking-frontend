import React, { useState } from "react";
import fakeTech from "../services/fakeTech";
import TabelBody from "./common/TableBody";
import TabelHeader from "./common/TableHeader";
import { Column } from "../types/Table";

function FoodsTable() {
  const [columns, setColumns] = useState<Column[]>([
    { path: "available", label: "Available" },
    { path: "electricalCompetence", label: "Electrical competence" },
    { path: "workPermitNorway", label: "Work permit Norway" },
    { path: "driverLicense", label: "Driver license" },
    { path: "specificTools", label: "Specific tools" },
    { path: "vanWithWinterTire", label: "Van with winter tire" },
    { path: "location", label: "Location" },
  ]);

  const handleSort = (path: String) => {
    console.log("click", path);
  };

  return (
    <table className={"table table-hover"}>
      <TabelHeader columns={columns} onSort={handleSort} />
      <TabelBody data={fakeTech} columns={columns} />
    </table>
  );
}

export default FoodsTable;
