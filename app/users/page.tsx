import React from 'react';

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    // 禁用緩存
    cache: 'no-store',
    // 運行後台作業，並且每秒從後端獲取新數據
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
