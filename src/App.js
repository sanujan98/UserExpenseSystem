import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from './Screens/dashboard';
import Login from './Screens/login';
import Register from './Screens/register';
import forgetpassword from './Screens/forgetpassword';
// ...import other page components

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




