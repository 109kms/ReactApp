import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import axiosClient from '../api/useAxios';

const UserList = () => {

  // state
  const [ users, setUsers ] = useState([]);

  // useEffect
  useEffect(() => {
    axiosClient.get()
      .then(jsonData => setUsers(jsonData));
  }, [])

  return (
    <div>
      <ul>
        {
          users.map(user => (
            <li key={user.id}>
              {user.name}<br/>
              {user.email}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default UserList;