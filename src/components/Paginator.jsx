import React from "react";

const Paginator = ({
  pageSize = 1,
  totalCount = 0,
  currentPage = 0,
  onPageSelected,
}) => {
  const buttonCount = Math.ceil(totalCount / pageSize);
  const buttons = [];

  for (let i = 1; i <= buttonCount; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => onPageSelected(i)}
        className={`w-8 h-8 rounded ${currentPage === i ? "bg-slate-700" : ""}`}
      >
        {i}
      </button>
    );
  }

  return <div className="flex p-2 bg-slate-800 rounded-lg">{buttons}</div>;
};

export default Paginator;
