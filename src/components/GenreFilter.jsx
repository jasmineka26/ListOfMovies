import React from "react";

const GenreFilter = ({
  genres = [],
  selectedGenreId = "",
  onGenreSelected,
}) => {
  const classes = `hover:bg-slate-600 py-1 rounded`;
  return (
    <div className="flex flex-col gap-2 border rounded p-2 w-36 text-center">
      <button
        onClick={() => onGenreSelected("")}
        className={`${selectedGenreId === "" ? "bg-slate-700" : ""} ${classes}`}
      >
        All Genres
      </button>
      {genres.map((g) => (
        <button
          onClick={() => onGenreSelected(g._id)}
          key={g._id}
          className={`${
            selectedGenreId === g._id ? "bg-slate-700" : ""
          } ${classes}`}
        >
          {g.name}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
