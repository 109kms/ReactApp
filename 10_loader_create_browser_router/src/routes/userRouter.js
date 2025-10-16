import { createBrowserRouter } from 'react-router-dom';
import UserList from '../pages/UserList';
import UserDetail from '../pages/UserDetail';

export const userRouter = createBrowserRouter([
  // users
  {
    path: "/users",
    element: <UserList/>,
    loader: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      return response.json();
    }
  },

  // users/1
  {
    path: '/users/:id',
    element: <UserDetail/>,
    loader: async ({ params}) => {
      const result = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      return result.json();
    }
  }

])