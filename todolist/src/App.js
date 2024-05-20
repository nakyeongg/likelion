import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
