import React from "react";
import Table from "./Table";

const ProjectOne = () => {
  const makeTableData = (w: number, h: number) => {
    return new Array(h).fill(0).map((_, row) => {
      return new Array(w).fill(0).map((_, col) => {
        return row * 10 + col;
      });
    });
  };

  return (
    <div>
      <h3>Virtual Scroll</h3>
      <Table data={makeTableData(5, 10000)} rowHeight={40} visibleRows={5} />
    </div>
  );
};

export default ProjectOne;
