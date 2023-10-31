import React from "react";

const DeleteButton = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      className="bg-red-600 text-white rounded shadow-sm px-2 py-1 w-16"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
