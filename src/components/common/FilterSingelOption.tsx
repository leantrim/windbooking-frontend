import React from "react";
import { Column, SortColumns } from "../../types/Table";

interface Props {
  column: Column;
  onFilter: (path: string) => void;
  filterSchema: SortColumns;
  icon: string;
}

function FilterSingelOption({ column, filterSchema, onFilter, icon }: Props) {
  return (
    <div className="filter-main-element">
      <span className="filter-icon">
        <i className={icon} />
      </span>
      <span className="filter-path">{column.label}</span>
      <span className="filter-button" onClick={() => onFilter(column.path)}>
        {filterSchema[column.path] && (
          <i className="fas fa-check-circle pointer" />
        )}
        {!filterSchema[column.path] && (
          <i className="fas fa-circle pointer"></i>
        )}
      </span>
    </div>
  );
}

export default FilterSingelOption;
