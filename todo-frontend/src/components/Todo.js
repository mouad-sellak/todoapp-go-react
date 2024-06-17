import React from 'react';

const Todo = ({ todo, deleteTodo, completeTodo }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <button onClick={() => completeTodo(todo.id)}>Complete</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
