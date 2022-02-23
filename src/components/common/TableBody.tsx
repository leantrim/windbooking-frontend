import React from "react";
import _ from "lodash";
import { Column } from "../../types/Table";
import { Technician } from "../../types/TechnicianUpdated";

interface Props {
  columns: Column[];
  data: Technician[];
}

function TabelBody({ data, columns }: Props) {
  const createKey = (item: Technician, column: Column) => {
    return item._id + column.path;
  };

  const renderCell = (item: Technician, column: Column) => {
    if (column.path === "location") {
      return _.get(item, column.path);
    } else if (_.get(item, column.path) === true) {
      return "true";
    } else {
      return "false";
    }
  };

  return (
    <tbody>
      {data.map((item: Technician) => (
        <tr key={item._id}>
          {columns.map((column) => (
            <td key={createKey(item, column)}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TabelBody;
