import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 Not Found</h1>
      <button onClick={e => navigate("/")}>홈으로 이동</button>
    </div>
  );
};

export default NotFound;