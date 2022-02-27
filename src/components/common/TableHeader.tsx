import React from "react";
import { Column, SortColumns } from "../../types/Table";

interface Props {
  columns: Column[];
  filterSchema: SortColumns;
  onFilter: (path: String) => void;
}

function TabelHeader({ onFilter, columns, filterSchema }: Props) {
  const renderSortIcon = (path: string) => {
    if (path === "location") return;
    else if (filterSchema[path] === true)
      return <i className="fas fa-check-circle" />;
    else return <i className="fas fa-circle"></i>;
  };

  return (
    <thead>
      <tr>
        {columns.map((column: Column) => (
          <th key={column.path} onClick={() => onFilter(column.path)}>
            {column.label}
            {renderSortIcon(column.path)}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TabelHeader;
