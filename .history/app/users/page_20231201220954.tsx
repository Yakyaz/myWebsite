import React from "react";

interface User {
  id: number;
  username: string;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.org/users");
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
