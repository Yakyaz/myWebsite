"use client";
import React, { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h2 className="text-black">Likes: {likes}</h2>
      <button
        onClick={handleClick}
        className="text-black border border-b-gray-800"
      >
        Like
      </button>
    </div>
  );
};

export default LikeButton;
