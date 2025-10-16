import { createBrowserRouter } from 'react-router-dom';
import { lazy } from "react";

const UserList = lazy(() => import("../components/UserList"));

export const router = createBrowserRouter([
  {
    path: "/users",
    element: <UserList />,
  }
]);