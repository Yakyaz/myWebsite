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
      <button onClick={handleClick} className="text-black bg-slate-600">
        Like ({likes})
      </button>
    </div>
  );
};

export default LikeButton;
