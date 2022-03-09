import React from "react";
import _ from "lodash";
import { Column } from "../../types/Table";
import { Technician } from "../../types/TechnicianUpdated";
import "../../styles/TechBody.css";

interface Props {
  columns: Column[];
  data: Technician[];
  onSelect: (technician: Technician) => void;
}

function TabelBody({ data, columns, onSelect }: Props) {
  const renderCell = (item: Technician, column: Column) => {
    if (["location", "name", "company"].includes(column.path))
      return (
        <span className="tech-row-content">{_.get(item, column.path)}</span>
      );

    if (_.get(item, column.path)) {
      switch (column.path) {
        case "available":
          return (
            <span className="icon-box">
              <i className="fas fa-user-check icon"></i>
            </span>
          );
        case "electricalCompetence":
          return (
            <span className="icon-box">
              <i className="fas fa-bolt icon"></i>
            </span>
          );
        case "workPermitNorway":
          return (
            <span className="icon-box">
              <i className="fas fa-flag icon"></i>
            </span>
          );
        case "driverLicense":
          return (
            <span className="icon-box">
              <i className="fas fa-shuttle-van icon"></i>
            </span>
          );
        case "vanWithWinterTire":
          return (
            <span className="icon-box">
              <i className="fas fa-snowflake icon"></i>
            </span>
          );
        case "specificTools":
          return (
            <span className="icon-box">
              <i className="fas fa-wrench icon"></i>
            </span>
          );
        case "safetyCourses":
          return (
            <span className="icon-box">
              <i className="fas fa-hard-hat icon"></i>
            </span>
          );

        default:
          break;
      }
    }
  };

  return (
    <>
      <div className="tech-body">
        <div className="main-header">
          <span className="filler" />
          <span className="header">Name</span>
          <span className="header">Company</span>
          <span className="header">Location</span>
        </div>
        {data.map((item: Technician) => (
          <div
            className="tech-row"
            style={
              item.selected
                ? { background: "#6aa84f" }
                : { background: "transparent" }
            }
            key={item._id}
            onClick={() => onSelect(item)}
          >
            <span className="filler" />
            {columns.map((column) => renderCell(item, column))}
          </div>
        ))}
      </div>
    </>
  );
}

export default TabelBody;
