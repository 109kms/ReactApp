import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate();

  const handleHomeClick = e => {
    navigate("/");
  }

 return (
  <div>
   <h3>About</h3>
   <button onClick={handleHomeClick}>Home</button>
  </div>
 );
};

export default About;