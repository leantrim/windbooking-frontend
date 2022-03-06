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

  const renderIcon = (label: string) => {
    switch (label) {
      case "Available":
        return <i className="fas fa-user-check" />;
      case "Electrical competence":
        return <i className="fas fa-bolt"></i>;
      case "Work permit Norway":
        return <i className="fas fa-flag"></i>;
      case "Driver license":
        return <i className="fas fa-shuttle-van"></i>;
      case "Van with winter tire":
        return <i className="fas fa-snowflake"></i>;
      case "Specific tools":
        return <i className="fas fa-wrench"></i>;

      default:
        break;
    }
  };

  return (
    <div className="main-filter">
      {columns.map((column: Column) => (
        <React.Fragment key={column.path}>
          <span className="filter-icon">{renderIcon(column.label)}</span>
          <span className="filter-path">{renderLabel(column.label)}</span>
          <span className="filter-button" onClick={() => onFilter(column.path)}>
            {renderSortIcon(column.path)}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

export default TabelHeader;
