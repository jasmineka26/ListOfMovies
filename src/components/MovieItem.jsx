import React from "react";
import DeleteButton from "./DeleteButton";
import Like from "./Like";

const MovieItem = ({
  title = "",
  genre = "",
  stock = 0,
  rate = 0,
  isLiked = false,
  onLike,
  onDelete,
}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{genre}</td>
      <td>{stock}</td>
      <td>{rate}</td>
      <td>
        <Like isLiked={isLiked} onLike={onLike} />
      </td>
      <td>
        <DeleteButton onDelete={onDelete} />
      </td>
    </tr>
  );
};

export default MovieItem;
