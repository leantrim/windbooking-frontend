import React from "react";
import { Column } from "../../types/Table";

interface Props {
  columns: Column[];
  onSort: (path: String) => void;
}

function TabelHeader({ onSort, columns }: Props) {
  return (
    <thead>
      <tr>
        {columns.map((column: Column) => (
          <th key={column.path} onClick={() => onSort(column.path)}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TabelHeader;
