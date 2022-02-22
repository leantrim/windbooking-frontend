import React, { useEffect, useState } from "react";
import { getTech } from "../services/techService";
import { Technician } from "../types/Technician";

import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";

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
    // <Table striped bordered hover>
    <table className="table table-hover ">
      <thead>
        <tr>
          <td>Name</td>
          <td>Tools</td>
          <td>Work Permit</td>
          <td>Driver License</td>
          <td>Transport vehicle</td>
          <td>Certifications</td>
          <td>Achievements</td>
        </tr>
      </thead>
      <tbody>
        {technicians?.map((technician) => (
          <>
            <tr
              data-toggle="collapse"
              data-target={`.multi-collapse1${technician.userID}`}
              aria-controls={technician.userID}
            >
              <td>Albin</td>
              <td>
                {technician.tools?.map((tool) => {
                  return tool + ", ";
                })}
              </td>
              <td>{technician.workPermit ? "Yes" : "No"}</td>
              <td>{technician.driverLicense ? "Yes" : "No"}</td>
              <td>
                {technician.transportVehicle ? "Yes " : "No "}
                With Winter Tyres?
                {technician.transportVehicle?.winterTyres ? " Yes " : " No "}
              </td>
              <td>
                {technician.certifications?.map((certification) => {
                  return certification + ", ";
                })}
              </td>
              <td>
                {technician.achievements?.map((achievement) => {
                  return achievement + ", ";
                })}
              </td>
            </tr>
            <tr
              className={`collapse multi-collapse${technician.userID}`}
              id={technician.userID}
            >
              <td>{technician.userID} </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
    // </Table>
  );
}

export default TechTable;
