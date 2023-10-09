// src/App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from './store/todo.js';

function App() {
  const [todo, setTodo] = useState('')
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo !== '') {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  const handleUpdateTodo = (id) => {
    dispatch(updateTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span >
              {todo.text}
            </span>
            <button onClick={()=>handleUpdateTodo()}>Update</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
