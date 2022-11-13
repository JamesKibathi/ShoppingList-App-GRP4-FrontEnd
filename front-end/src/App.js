import logo from './logo.svg';
import './App.css';
import './Table'
import { useEffect, useState } from 'react';
import Table from './Table';
import { Routes, Route } from "react-router-dom"
import Login from './Login';
import Forms from './Forms';

function App() {


  return (
    <div className="App">
      <h1>Shopping Mara Moja Shopping List</h1>
      <Table />
      
    </div>
  );
}

export default App;
