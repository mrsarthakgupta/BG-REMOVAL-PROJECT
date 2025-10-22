import React ,{useContext}from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import  Result  from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'

const App = () => {
  const { showLogin } = useContext(AppContext);
  return (
    <div className='min-h-screen bg-slate-50'>
       <ToastContainer   position='bottom-right'/>
      <Navbar/>
      { showLogin && <Login/>}
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/result' element={< Result/>} />
       <Route path='/buy' element={< BuyCredit/>} />
      </Routes>
      <Footer/>
      {/* <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} /> */}
    </div>

  )
}

export default App
