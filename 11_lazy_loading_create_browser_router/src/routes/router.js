import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import { lazy } from "react";

// import About from "../pages/About";
// import Board from "../pages/Board";
// import Home from "../pages/Home";
// import NotFound from "../pages/NotFound";

// lazy loading으로 컴포넌트 불러오기
const Home = lazy(() => import("../pages/Home"));
const Board = lazy(() => import("../pages/Board"));
const About = lazy(() => import("../pages/About"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const router = createBrowserRouter([
  // 부모 라우트
  {
    path: "/",
    element: <Layout/>,
    // 중첩된 자식 라우트
    children: [
      // Home (부모 경로를 그대로 사용)
      {
        index: true,
        element: <Home/>,
      },
      // About (부모 라우트의 상대 경로로 작성 : "/" + "about" = "/about")
      {
        path: "about",
        element: <About/>,
      },
      // Board
      {
        path: "board",
        element: <Board/>,
      }
    ]
  },
  // 그 외 경로
  {
    path: "*",
    element: <NotFound/>,
  }
])