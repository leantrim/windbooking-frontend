import React from "react";
import { Column } from "../types/Table";
import "../styles/TechFilter.css";

interface Props {
  columns: Column[];
}

function TableFilter({ columns }: Props) {
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
