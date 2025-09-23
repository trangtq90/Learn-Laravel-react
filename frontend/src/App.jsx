import { useState } from 'react'
// import './App.css'
import './assets/css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/frontend/Home';
import About from './component/frontend/About';
import Login from './component/backend/login'; 
import Dashboard from './component/backend/dashboard'; 
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from './component/common/RequireAuth';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />

          {/* ADMIN */}
          <Route path="/admin/login" element={<Login/>} />
          <Route path="/admin" element={
            <RequireAuth>
                <Dashboard/>
            </RequireAuth>
            } 
          />
        </Routes>
      </Router>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  )
}

export default App
