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

// eslint-disable-next-line react-refresh/only-export-components
export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within TodoProvider');
  }
  return context;
};
