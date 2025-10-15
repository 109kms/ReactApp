import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
 return (
  <div className='dashboard'>
   <h1>Dashboard</h1>
   <nav>
     <Link to="general">General</Link> | <Link to="setting">Setting</Link>
   </nav>
   <Outlet />
  </div>
 );
};

export default Dashboard;