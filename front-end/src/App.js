import logo from './logo.svg';
import './App.css';
import './Table'
import Table from './Table';
import { Routes, Route } from "react-router-dom"
import Login from './Login';

function App() {
  return (
    <div className="App">
      <h1>Shopping List</h1>
      
      <Table />
      
    </div>
  );
}

export default App;
