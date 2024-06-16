import React, { useState } from 'react';
import { useTodo } from '../Context';
import './TodoForm.css';

const TodoForms = () => {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo('');
  };

  return (
    <div className="form-container">
      <form onSubmit={add}>
        <input
          placeholder="Write Todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForms;
