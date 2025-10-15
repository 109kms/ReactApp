import { useParams } from "react-router-dom";

/*
  useParams()
  1. react-router-dom에서 제공하는 훅 중 하나로, 경로의 동적 파라미터 값(경로변수)을 컴포넌트에서 가져올 때 사용합니다.
  2. useParams()는 동적 파라미터들을 객체 형식으로 반환합니다.
  3. 동적 파라미터들은
*/

const User = () => {
  // useParams()
  const { uid } = useParams();
  return (
    <div>
      <h3>User ID : {uid}</h3>
    </div>
  );
};

export default User;
