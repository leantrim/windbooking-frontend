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
    if (column.path === "location") {
      return _.get(item, column.path);
    } else if (_.get(item, column.path) === true) {
      return <i className="fas fa-circle" style={{ color: "green" }}></i>;
    } else {
      return <i className="fas fa-circle" style={{ color: "red" }}></i>;
    }
  };

  return (
    <>
      <tbody>
        {data.map((item: Technician) => (
          <tr
            style={
              item.selected
                ? { background: "blue" }
                : { background: "transparent" }
            }
            key={item._id}
            onClick={() => onSelect(item)}
          >
            {columns.map((column) => (
              <td key={createKey(item, column)}>{renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default TabelBody;
