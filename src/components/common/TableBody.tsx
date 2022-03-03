import React from "react";
import _ from "lodash";
import { Column } from "../../types/Table";
import { Technician } from "../../types/TechnicianUpdated";

interface Props {
  columns: Column[];
  data: Technician[];
  onSelect: (technician: Technician) => void;
}

function TabelBody({ data, columns, onSelect }: Props) {
  const createKey = (item: Technician, column: Column) => {
    return item._id + column.path;
  };

  const renderCell = (item: Technician, column: Column) => {
    switch (column.path) {
      case "location":
        return (
          <span className="tech-row-location">{_.get(item, column.path)}</span>
        );
      case "name":
        return (
          <span className="tech-row-name">{_.get(item, column.path)}</span>
        );

      case "company":
        return (
          <span className="tech-row-company">{_.get(item, column.path)}</span>
        );

      default:
        break;
    }

    if (_.get(item, column.path) === true) {
      switch (column.path) {
        case "available":
          return (
            <span className="icon-box">
              <i className="fas fa-user-check"></i>
            </span>
          );
        case "electricalCompetence":
          return (
            <span className="icon-box">
              <i className="fas fa-bolt"></i>
            </span>
          );
        case "workPermitNorway":
          return (
            <span className="icon-box">
              <i className="fas fa-flag"></i>
            </span>
          );
        case "driverLicense":
          return (
            <span className="icon-box">
              <i className="fas fa-shuttle-van"></i>
            </span>
          );
        case "vanWithWinterTire":
          return (
            <span className="icon-box">
              <i className="fas fa-snowflake"></i>
            </span>
          );
        case "specificTools":
          return (
            <span className="icon-box">
              <i className="fas fa-wrench"></i>
            </span>
          );

        default:
          break;
      }
      return <i className="fas fa-circle " style={{ color: "#DE9151" }}></i>;
    }
  };

  return (
    <>
      <div className="tech-body">
        <div className="main-header">
          <span className="filler" />
          <span className="header-name">Name</span>
          <span className="header-company">Company</span>
          <span className="header-location">Location</span>
        </div>
        {data.map((item: Technician) => (
          <div
            className="tech-row"
            style={
              item.selected
                ? { background: "#285238", borderRight: "solid black" }
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
