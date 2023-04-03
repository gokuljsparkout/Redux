import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "./UserSlice";

function UserView() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.products);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    console.log("Dispatching getUsers()");
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}: {user.email}</li>)}
      </ul>
    </div>
  );
}

export default UserView;
