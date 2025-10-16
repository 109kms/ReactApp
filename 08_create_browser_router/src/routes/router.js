// <Routes> + <Route> 대체

import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Board from '../pages/Board';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  // 각 라우트를 객체 형식으로 정의
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/board",
    element: <Board/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  }
]);