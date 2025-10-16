import './App.css';
import { Suspense } from 'react';
import { router } from './routes/userRouter';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
