import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/index.jsx";
import Archive from "./pages/Archive/index.jsx";
import Bin from "./pages/Bin/index.jsx";
import Favorities from "./pages/Favorities/index.jsx";
import PrivateRoute from './Components/PrivateRoute.jsx';
import Login from './pages/login/index';
import Signup from './pages/signup/index';


const App = () => {
  return (
   <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
    <Route path="/archive" element={<PrivateRoute><Archive /></PrivateRoute>} />
    <Route path="/favorites" element={<PrivateRoute><Favorities/></PrivateRoute>}/>
    <Route path="/bin" element={<PrivateRoute><Bin /></PrivateRoute>} />

   </Routes>
  )
}

export default App
