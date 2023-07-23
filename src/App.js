import Login from './component/Login';
import Navbar from './component/Navbar';
import Table from './component/Table';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar title="Pandav Kund"/>
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/bill" element={ <Table /> } />
    </Routes>
    </>
  );
}

export default App;
