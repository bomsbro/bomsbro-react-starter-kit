import { useState } from 'react';
import { Link } from 'react-router-dom';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>카운터</h1>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <div style={{ marginTop: '20px' }}>
        <Link to="/">
          <button>홈으로 돌아가기</button>
        </Link>
      </div>
    </div>
  );
};

export default Counter;
