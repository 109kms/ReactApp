import { Link } from 'react-router-dom';

const Board = () => {
  return (
    <div>
      <h1>Board Page</h1>
      <p>게시판 페이지입니다.</p>
      <Link to="/">홈으로 이동</Link>
    </div>
  );
};

export default Board;