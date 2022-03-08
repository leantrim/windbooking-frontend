import React, { useState } from "react";
import { Column, SortColumns } from "../../types/Table";

interface props {
  column: Column;
  options: any;
  onFilter: (path: string) => void;
  filterSchema: SortColumns;
  icon: string;
}

interface Option {
  path: string;
  label: string;
}

function FilterDropList({
  column,
  options,
  filterSchema,
  onFilter,
  icon,
}: props) {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="filter-main-element">
        <span className="filter-icon">
          <i className={icon}></i>
        </span>
        <span className="filter-path">{column.label}</span>
        <span
          className="filter-button pointer"
          onClick={() => setOpen(!isOpen)}
        >
          <i className="fas fa-caret-square-down"></i>
        </span>
      </div>
      {isOpen && (
        <div className="filter-drop-list">
          {options.map((option: Option) => (
            <>
              <span className="filter-path">{option.label}</span>
              <span
                className="filter-button"
                onClick={() => onFilter(option.path)}
              >
                {filterSchema[option.path] && (
                  <i className="fas fa-check-circle pointer" />
                )}
                {!filterSchema[option.path] && (
                  <i className="fas fa-circle pointer"></i>
                )}
              </span>
            </>
          ))}
        </div>
      )}
    </>
  );
}

export default FilterDropList;
