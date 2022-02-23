import React from "react";
import { Column, SortColumns } from "../../types/Table";

interface Props {
  columns: Column[];
  sortColumns: SortColumns;
  onSort: (path: String) => void;
}

function TabelHeader({ onSort, columns, sortColumns }: Props) {
  const renderSortIcon = (path: string) => {
    if (sortColumns[path] === true)
      return <i className="fas fa-check-circle" />;
    else return <i className="fas fa-circle"></i>;
  };

  return (
    <thead>
      <tr>
        {columns.map((column: Column) => (
          <th key={column.path} onClick={() => onSort(column.path)}>
            {column.label}
            {renderSortIcon(column.path)}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TabelHeader;
