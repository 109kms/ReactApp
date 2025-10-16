import { useLoaderData } from 'react-router-dom';

const UserDetail = () => {
  const user = useLoaderData();
  return (
    <div>
      <h1>UserDetail</h1>
      <ul>
        <li><strong>이메일:</strong> {user.email}</li>
        <li><strong>사용자 이름:</strong> {user.username}</li>
        <li><strong>연락처:</strong> {user.phone}</li>
        <li><strong>웹사이트:</strong> {user.website}</li>
        <li><strong>주소:</strong> {user?.address?.street}, {user?.address?.suite}, {user?.address?.city}</li>
      </ul>
    </div>
  );
};

export default UserDetail;