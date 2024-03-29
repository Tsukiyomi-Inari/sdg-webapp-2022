//Main component acting as container for all other components


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Main from './pages/Main'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <>
    <Router>
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
    </Router>
    <ToastContainer />
    </>
  )
}

export default App;
