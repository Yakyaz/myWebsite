import React, { useState } from "react";

const homepage = () => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <main className="flex min-h-screen ">
      <h1>Home</h1>
      <h2>counter: {likes}</h2>
      <button onClick={handleClick}>click me to add</button>
    </main>
  );
};

export default homepage;
