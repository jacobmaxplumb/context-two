import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import TodoList from './components/todo-list';
import TodoForm from './components/todo-form';

export const TodoContext = createContext();
const initialState = {
  todos: ['something'],
  todo: 'asdfas'
}

function App() {
  const [todoState, setTodoState] = useState(initialState)
  return (
    <div className="App">
      <TodoContext.Provider value={{todoState, setTodoState}}>
        <TodoForm />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
