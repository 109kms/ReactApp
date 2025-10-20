import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>소개 페이지입니다.</p>
      <Link to="/">홈으로 이동</Link>
    </div>
  );
};

export default About;