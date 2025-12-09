import { Routes, Route, Link } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import Home from './pages/Home';
import Counter from './pages/Counter';
import Timer from './pages/Timer';
import TodoList from './pages/TodoList';
import TodoCreate from './pages/TodoCreate';
import './App.css';

const linkStyle = {
  padding: '8px 16px',
  background: '#007bff',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '4px',
};

const App = () => {
  return (
    <TodoProvider>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>🎯 React 학습 - 라우팅 & 상태관리</h1>

        <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Link to="/" style={linkStyle}>🏠 홈</Link>
          <Link to="/counter" style={linkStyle}>🔢 카운터</Link>
          <Link to="/timer" style={linkStyle}>⏱️ 타이머</Link>
          <Link to="/todos" style={linkStyle}>📝 투두리스트</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/todos/create" element={<TodoCreate />} />
        </Routes>
      </div>
    </TodoProvider>
  );
};

export default App;
