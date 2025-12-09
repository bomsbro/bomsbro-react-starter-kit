import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>🏠 홈페이지</h2>
      <p>React Router와 상태관리를 학습하는 프로젝트입니다.</p>
      <ul>
        <li><Link to="/counter">카운터</Link> - useState 기본 사용법</li>
        <li><Link to="/timer">타이머</Link> - useEffect 기본 사용법</li>
        <li><Link to="/todos">투두리스트</Link> - Context API 상태관리</li>
      </ul>
    </div>
  );
};

export default Home;
