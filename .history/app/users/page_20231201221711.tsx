import React from "react";

interface User {
  id: number;
  username: string;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul className="text-black">
        {users.map((user) => (
          <li key={user.id} className="text-black">
            {user.username}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
