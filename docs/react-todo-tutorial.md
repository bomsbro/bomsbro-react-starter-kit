# 투두리스트 예제로 차근차근 따라하기

---

## 1. 프로젝트 세팅

### 라우터 추가

```bash
pnpm install react-router-dom
```

### 폴더 구조

```
src/
├── main.tsx
├── App.tsx
├── App.css
├── index.css
├── context/
│   └── TodoContext.tsx
├── pages/
│   ├── Home.tsx
│   ├── Counter.tsx
│   ├── Timer.tsx
│   ├── TodoList.tsx
│   └── TodoCreate.tsx
```

---

## 2. React Router DOM v6 핵심 개념

### BrowserRouter

앱 전체를 감싸는 라우팅 제공자

```tsx
// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

### Routes와 Route

경로와 컴포넌트 매핑

```tsx
import { Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/counter" element={<Counter />} />
  <Route path="/timer" element={<Timer />} />
  <Route path="/todos" element={<TodoList />} />
  <Route path="/todos/create" element={<TodoCreate />} />
</Routes>
```

### Link

페이지 새로고침 없이 이동

```tsx
import { Link } from 'react-router-dom';

<Link to="/">홈</Link>
<Link to="/counter">카운터</Link>
<Link to="/todos">투두리스트</Link>
```

### useNavigate

프로그래밍 방식 페이지 이동

```tsx
import { useNavigate } from 'react-router-dom';

const TodoCreate = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // 투두 생성 후 목록으로 이동
    navigate('/todos');
  };

  return <button onClick={handleSubmit}>생성</button>;
};
```

---

## 3. React 5대 핵심 Hook

### useState

컴포넌트 로컬 상태 관리

```tsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </div>
  );
};
```

### useEffect

사이드 이펙트 처리 (타이머, 이벤트 리스너 등)

```tsx
import { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // cleanup: 컴포넌트 언마운트 또는 isRunning 변경 시 실행
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <div>
      <p>경과 시간: {seconds}초</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? '정지' : '시작'}
      </button>
      <button onClick={() => setSeconds(0)}>리셋</button>
    </div>
  );
};
```

**의존성 배열**

- `[]`: 마운트 시 1번만
- `[value]`: value 변경 시마다
- 없음: 매 렌더링마다 (비추천)

### useMemo

값 메모이제이션 (무거운 연산 캐싱)

```tsx
import { useMemo } from 'react';

const TodoList = ({ todos, filter }: { todos: Todo[]; filter: string }) => {
  const filteredTodos = useMemo(() => {
    console.log('필터링 실행');
    return todos.filter(t => t.title.includes(filter));
  }, [todos, filter]);

  return <ul>{filteredTodos.map(t => <li key={t.id}>{t.title}</li>)}</ul>;
};
```

### useCallback

함수 메모이제이션 (props 최적화)

```tsx
import { useState, useCallback } from 'react';

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return <Child onClick={handleClick} />;
};
```

### useContext

Context 값 읽기

```tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { theme, setTheme } = context;

  return (
    <div>
      <p>현재 테마: {theme}</p>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        테마 변경
      </button>
    </div>
  );
};
```

---

## 4. 상태관리 3가지 방법

### 🏠 Local State (useState)

컴포넌트 내부에서만 사용

```tsx
const TodoInput = () => {
  const [input, setInput] = useState('');

  return (
    <input
      value={input}
      onChange={e => setInput(e.target.value)}
    />
  );
};
```

**사용 케이스**: 폼 입력, UI 토글, 컴포넌트 내부 데이터

### 🏢 Context API

Provider 하위 모든 컴포넌트에서 접근 가능

```tsx
import { createContext, useState, useContext, ReactNode } from 'react';

// Context 생성
const UserContext = createContext<UserContextType | null>(null);

// Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

// 사용
const Profile = () => {
  const { user } = useUser();
  return <div>{user?.name}</div>;
};
```

**사용 케이스**: 테마, 인증 정보, 언어 설정

### 🌍 Global Store (Zustand)

가볍고 간단한 전역 상태 관리 라이브러리

```bash
pnpm install zustand
```

```tsx
import { create } from 'zustand';

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// 스토어 생성
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// 사용 (어디서든 바로 사용 가능!)
const Counter = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
```

**사용 케이스**: 전역 상태, 복잡한 앱 상태, Provider 없이 간단하게 사용

### 📊 3가지 방법 비교

| 구분 | Local State | Context API | Zustand |
|------|-------------|-------------|---------|
| 범위 | 컴포넌트 내부 | Provider 하위 | 전역 (어디서든) |
| 설정 | 없음 | Provider 필요 | 스토어 생성만 |
| 보일러플레이트 | 최소 | 많음 | 적음 |
| 사용 케이스 | 폼, UI 토글 | 테마, 인증 | 전역 앱 상태 |

---

## 5. 투두리스트 실전 예제

### 📁 src/main.tsx (수정)

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

### 📁 src/App.tsx (수정)

```tsx
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
```

### 📁 src/pages/Home.tsx (새 파일)

```tsx
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
```

### 📁 src/pages/Counter.tsx (새 파일)

```tsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>🔢 카운터</h2>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </div>
  );
};

export default Counter;
```

### 📁 src/pages/Timer.tsx (새 파일)

```tsx
import { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <div>
      <h2>⏱️ 타이머</h2>
      <p>경과 시간: {seconds}초</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? '정지' : '시작'}
      </button>
      <button onClick={() => setSeconds(0)}>리셋</button>
    </div>
  );
};

export default Timer;
```

### 📁 src/context/TodoContext.tsx (새 파일)

```tsx
import { createContext, useState, useContext, ReactNode } from 'react';

interface Todo {
  id: number;
  title: string;
  content: string;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string, content: string) => void;
  deleteTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'React 공부하기', content: 'Hook과 상태관리 학습' },
    { id: 2, title: 'TypeScript 익히기', content: '타입 시스템 이해하기' },
  ]);

  const addTodo = (title: string, content: string) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), title, content }
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within TodoProvider');
  }
  return context;
};
```

### 📁 src/pages/TodoList.tsx (새 파일)

```tsx
import { Link } from 'react-router-dom';
import { useTodos } from '../context/TodoContext';

const todoItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px',
  marginBottom: '8px',
  background: '#f8f9fa',
  borderRadius: '4px',
  border: '1px solid #dee2e6',
};

const deleteButtonStyle = {
  padding: '4px 12px',
  background: '#dc3545',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const TodoList = () => {
  const { todos, deleteTodo } = useTodos();

  return (
    <div>
      <h2>📝 투두리스트</h2>

      <Link to="/todos/create">
        <button style={{ marginBottom: '16px', padding: '8px 16px' }}>
          + 새 투두 추가
        </button>
      </Link>

      {todos.length === 0 ? (
        <p style={{ color: '#999' }}>투두가 없습니다.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li key={todo.id} style={todoItemStyle}>
              <div>
                <strong>{todo.title}</strong>
                <p style={{ margin: '4px 0 0', color: '#666' }}>{todo.content}</p>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={deleteButtonStyle}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
```

### 📁 src/pages/TodoCreate.tsx (새 파일)

```tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodos } from '../context/TodoContext';

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginBottom: '12px',
  border: '1px solid #ddd',
  borderRadius: '4px',
};

const TodoCreate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addTodo } = useTodos();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title.trim()) {
      alert('제목을 입력해주세요');
      return;
    }

    addTodo(title, content);
    navigate('/todos');
  };

  return (
    <div>
      <h2>✏️ 새 투두 추가</h2>

      <div style={{ maxWidth: '400px' }}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="내용"
          value={content}
          onChange={e => setContent(e.target.value)}
          style={{ ...inputStyle, height: '100px', resize: 'vertical' }}
        />

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handleSubmit}
            style={{ padding: '8px 16px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            추가
          </button>
          <button
            onClick={() => navigate('/todos')}
            style={{ padding: '8px 16px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCreate;
```

---

## 6. 실행하기

```bash
pnpm dev
```

브라우저에서 `http://localhost:5173` 접속

---

## 7. 핵심 정리

### React Router v6

- `BrowserRouter`: 앱 감싸기
- `Routes` + `Route`: 경로 정의
- `Link`: 페이지 이동
- `useNavigate()`: 프로그래밍 방식 이동

### 5대 Hook

1. `useState`: 로컬 상태
2. `useEffect`: 사이드 이펙트
3. `useMemo`: 값 캐싱
4. `useCallback`: 함수 캐싱
5. `useContext`: Context 값 읽기

### 상태관리 3가지 방법

- **Local (useState)**: 컴포넌트 내부만
- **Context**: Provider 하위 전체
- **Zustand**: 전역 (어디서든)

### 언제 뭘 쓸까?

- 간단한 앱 → useState + Props
- Props Drilling 발생 → Context
- 복잡한 전역 상태 → Zustand
