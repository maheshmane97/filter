import logo from './logo.svg';
import './App.css';
import { Filter } from './filter/Filter';
import Table from './filter/Table';
import Dashboard from './filter/Dashboard';

function App() {
  return (
    <>
      <div style={{borderColor:"red"}}>
        <Dashboard />
      </div>
    </>
  );
}

export default App;
