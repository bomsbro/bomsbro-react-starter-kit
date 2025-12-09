import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈페이지</h1>
      <nav>
        <Link to="/counter">
          <button>카운터 페이지로 이동</button>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
