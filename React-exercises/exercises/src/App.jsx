import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import TodoList from './components/TodoList';
import UserForm from './components/UserForm';
import Counter from './components/Counter';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Router> 
        <Routes>
          <Route exact path="/" element={<TodoList />} />
          <Route path="/userform" element={<UserForm />} /> 
          <Route path="/counter" element={<Counter />} />
        </Routes>
    </Router>
    </>
  );
};

export default App;
