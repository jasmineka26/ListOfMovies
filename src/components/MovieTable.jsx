import React from "react";
import MovieItem from "./MovieItem";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const TableHeaderCell = ({
  title,
  sortPath,
  sortOrder = "asc",
  onChevronClick,
  showSort = false,
}) => {
  return (
    <th
      className="cursor-pointer"
      onClick={() => onChevronClick(sortPath, sortOrder)}
    >
      <div className="flex flex-row justify-center items-center">
        <div className=" px-1"> {title} </div>
        {showSort && (
          <div>
            {sortOrder === "asc" ? (
              <ChevronUpIcon className="w-5 h-5 text-white cursor-pointer px-1" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-white cursor-pointer px-1" />
            )}
          </div>
        )}
      </div>
    </th>
  );
};

const heads = [
  {
    title: "Title",
    sortPath: "title",
  },
  {
    title: "Genre",
    sortPath: "genre.name",
  },
  {
    title: "Stock",
    sortPath: "numberInStock",
  },
  {
    title: "Rate",
    sortPath: "dailyRentalRate",
  },
];

const MovieTable = ({
  movies = [],
  onMovieLiked,
  handleDelete,
  clickOnSorted,
  sortBy = "",
  sortOrder = "asc",
}) => {
  return (
    <table className="movie-table">
      <thead>
        <tr>
          {heads.map((h) => (
            <TableHeaderCell
              key={h.title}
              title={h.title}
              sortPath={h.sortPath}
              sortOrder={sortOrder}
              onChevronClick={clickOnSorted}
              showSort={sortBy === h.sortPath}
            />
          ))}
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((m) => (
          <MovieItem
            key={m._id}
            title={m.title}
            genre={m.genre.name}
            rate={m.dailyRentalRate}
            stock={m.numberInStock}
            isLiked={m.liked}
            onDelete={() => handleDelete(m._id)}
            onLike={(isLiked) => onMovieLiked(m._id, isLiked)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
