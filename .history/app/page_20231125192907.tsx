import { useState } from "react";

export default function Home() {

  const [likes, setLikes] = useState(0);

  return (
    <main className="flex min-h-screen ">
      <h1>Home</h1>
      <h2>counter: {likes}</h2>
      <button onClick={setLikes(likes + 1)}>click me to add</button>
    </main>
  );
}
