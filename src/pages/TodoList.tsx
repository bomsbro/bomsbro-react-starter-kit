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
