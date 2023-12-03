import React from "react";
import React from 'react'

const homepage = () => {
  return (
    <div>homepage</div>
  )
}

export default homepage
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}
export home