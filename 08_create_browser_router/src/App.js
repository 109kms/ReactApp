import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      {/*<nav>
        <Link to="/">Home</Link> | <Link to="/about">소개</Link> | <Link to="/board">게시판</Link>
      </nav>*/}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
