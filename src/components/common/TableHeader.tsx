import React, { useEffect } from "react";
import { Column, SortColumns } from "../../types/Table";

interface Props {
  columns: Column[];
  filterSchema: SortColumns;
  onFilter: (path: String) => void;
}

function TabelHeader({ onFilter, columns, filterSchema }: Props) {
  const renderSortIcon = (path: string) => {
    if (path === "location") return;
    else if (path === "name") return;
    else if (path === "company") return;
    else if (filterSchema[path] === true)
      return <i className="fas fa-check-circle pointer" />;
    else return <i className="fas fa-circle pointer"></i>;
  };

  const renderLabel = (label: string) => {
    if (label === "Location") return;
    else if (label === "Name") return;
    else if (label === "Company") return;
    else return label;
  };

  return (
    <div className="main-filter">
      {columns.map((column: Column) => (
        <>
          <span className="filter-path" key={column.path}>
            {renderLabel(column.label)}
          </span>
          <span className="filter-button" onClick={() => onFilter(column.path)}>
            {renderSortIcon(column.path)}
          </span>
        </>
      ))}
    </div>
  );
}

export default TabelHeader;
