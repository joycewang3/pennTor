import './App.css';
import User from './components/User';
import Admin from './components/Admin';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<User />} />
      </Routes>
    </>
  );
}

export default App;