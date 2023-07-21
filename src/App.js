import Login from './component/Login';
import Navbar from './component/Navbar';
import Table from './component/Table';
import data from './data.json';
import { Routes, Route } from 'react-router-dom';


function App() {
  const posts = data[101];
  return (
    <>
    <Navbar title="Pandav Kund"/>
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/bill" element={ <Table data={posts} /> } />
    </Routes>
    </>
  );
}

export default App;
