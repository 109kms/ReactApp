import { useParams } from "react-router-dom";

const DetailPage = () => {
  // "/boards/detail/:bid" 경로변수 값 꺼내기
  const { bid } = useParams();
  return (
    <div>
      
    </div>
  );
};

export default DetailPage;