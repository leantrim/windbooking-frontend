import React, { useEffect } from "react";
import { Column, SortColumns } from "../types/Table";
import "../styles/TechFilter.css";

interface Props {
  columns: Column[];
  filterSchema: SortColumns;
  onFilter: (path: String) => void;
}

function TableFilter({ onFilter, columns, filterSchema }: Props) {
  const renderSortIcon = (path: string) => {
    if (
      [
        "location",
        "name",
        "company",
        "safetyCourses",
        "electricalCompetence",
        "driverLicense",
      ].includes(path)
    )
      return;
    else if (filterSchema[path])
      return <i className="fas fa-check-circle pointer" />;
    else return <i className="fas fa-circle pointer"></i>;
  };

  const renderLabel = (label: string) => {
    if (["Location", "Name", "Company"].includes(label)) return;
    else return label;
  };

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

    // return (
    //   <>
    //     <span className="filter-icon">{renderIcon(column.path)}</span>
    //     <span className="filter-path">{renderLabel(column.label)}</span>
    //     <span className="filter-button" onClick={() => onFilter(column.path)}>
    //       {renderSortIcon(column.path)}
    //     </span>
    //   </>
    // );
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
