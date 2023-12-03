"use client";
import React, { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h2>Likes: {likes}</h2>
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
};

export default LikeButton;
