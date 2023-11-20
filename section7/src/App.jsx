import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

const mockData = [
  {
    id: 0,
    isDone: true,
    content: 'react 공부하기',
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);

  return (
    <div className='App'>
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}

export default App;
