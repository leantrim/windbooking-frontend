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
      return <i className="fas fa-circle " style={{ color: "green" }}></i>;
    } else {
      return <i className="fas fa-circle" style={{ color: "red" }}></i>;
    }
  };

  return (
    <>
      <div className="tech-body">
        {data.map((item: Technician) => (
          <div
            className="tech-row"
            style={
              item.selected
                ? { background: "blue" }
                : { background: "transparent" }
            }
            key={item._id}
            onClick={() => onSelect(item)}
          >
            {columns.map((column) => renderCell(item, column))}
          </div>
        ))}
      </div>
    </>
  );
}

export default TabelBody;
