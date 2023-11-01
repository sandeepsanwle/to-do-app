import './App.css';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NopageFound from './components/nopagefound/NopageFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NopageFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
