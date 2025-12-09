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
