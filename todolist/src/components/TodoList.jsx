import React, { useState } from 'react';
import plus from '../assets/img/plus.svg';
import deleteBtn from '../assets/img/delete.svg';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue('');
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To-DO LIST</h1>
      <form className="bigbox1" onSubmit={handleSubmit}>
        <div className="input-container">
          <input className="inputbox" placeholder="오늘 할 일을 입력해주세요!" type="text" value={inputValue} onChange={handleChange} />
          <button type="submit" className="btn1">
            <img src={plus} alt="" width="18" height="18" />
          </button>
        </div>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li className="bigbox" key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input className="donebox" type="checkbox" checked={todo.completed} onChange={() => handleToggleComplete(index)} />
            <span>{todo.text}</span>
            <button className="btn" onClick={() => handleDelete(index)}>
              <img src={deleteBtn} alt="Delete" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;