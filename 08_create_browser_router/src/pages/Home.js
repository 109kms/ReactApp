import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">소개</Link> | <Link to="/board">게시판</Link>
      </nav>
      <h1>Home Page</h1>
      <p>홈 페이지입니다.</p>
    </div>
  );
};

export default Home;