import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline} from "@heroicons/react/24/outline";

const Like = ({ isLiked, onLike }) => {
  if (isLiked) {
    return (
      <HeartIcon
        onClick={() => onLike(!isLiked)}
        className="w-4 h-4 text-red-500 cursor-pointer"
      />
    );
  }
  return (
    <HeartIconOutline
      onClick={() => onLike(!isLiked)}
      className="w-4 h-4 cursor-pointer"
    />
  );
};

export default Like;
