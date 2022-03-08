import React, { useEffect } from "react";
import { Column, SortColumns } from "../types/Table";
import "../styles/TechFilter.css";

interface Props {
  columns: Column[];
}

function TableFilter({ columns }: Props) {
  const renderIcon = (path: string) => {
    switch (path) {
      case "available":
        return <i className="fas fa-user-check" />;
      case "electricalCompetence":
        return <i className="fas fa-bolt"></i>;
      case "workPermitNorway":
        return <i className="fas fa-flag"></i>;
      case "driverLicense":
        return <i className="fas fa-shuttle-van"></i>;
      default:
        break;
    }
  };

  const renderMenu = (column: Column) => {
    if (column.filterContent) return column.filterContent(column);
  };

  return (
    <div className="main-filter">
      {columns.map((column: Column) => (
        <React.Fragment key={column.path}>{renderMenu(column)}</React.Fragment>
      ))}
    </div>
  );
}

export default TableFilter;
