import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from './store/todo.js';
import "./App.css"

function App() {
  const [todo, setTodo] = useState('');

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo !== '') {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  const handleUpdateTodo = (id, newText) => {
    dispatch(updateTodo({id, text:newText}));
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
          placeholder="Add new todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Todo List</th>
          </tr>
        </thead>
        <tbody>
{todos.map((todo) => (
  <tr key={todo.id}>
    <td>
      
        <span  onClick={() => {
        const text = prompt('Edit Todo:', todo.text);
        if (text) {
          handleUpdateTodo(todo.id, text);
        }
      }} >{todo.text}</span>
       
       </td>
       <td>
        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        <button
      className="btn btn-danger ml-2 "
      onClick={() =>
      {
        const newtext = prompt('Edit Todo:', todo.text);
        if (newtext) {
          handleUpdateTodo(todo.id, newtext);
        }
      }}
    >
    Update
    </button>
    </td> 
  </tr>
  ))}
  </tbody>
</table>
    </div>
  );
}

export default App;
