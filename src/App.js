import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './store/actions';

function App() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const todoList = useSelector((state) => {
    return state.todoList;
  });

  return (
    <div className='app'>
      <div className='todo_lists'>
        <h1>Todo List</h1>
        <div className='input_wrapper'>
          <input
            type='text'
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button onClick={() => dispatch(addTodo(todo), setTodo(''))}>
            Add todo
          </button>
        </div>
        <ul className='todo__item'>
          {todoList.map((todo) => {
            return (
              <li key={todo.id}>
                <p>{todo.todo}</p>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// export default connect(null, { addTodo })(App);
export default App;
