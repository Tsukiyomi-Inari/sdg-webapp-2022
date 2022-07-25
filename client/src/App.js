//Main component acting as container for all other components

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/header';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import Login from './pages/login';


function App() {
  return (
    <>
    <Router>
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />

      </Routes>
    </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
