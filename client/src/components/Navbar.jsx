import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
// const {user}=useContext(AppContext);
  const {user, setShowLogin , logout,credit} = useContext(AppContext)
  const navigate =useNavigate();
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
      <Link to='/' ><img className='w-32 sm:w-44' src={assets.logo} alt="" /></Link>
      { user ? 
      <div className='flex items-center gap-2 sm:gap-3'>
        <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
          <img className='w-5' src={assets.credit_star} alt="" />
          <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left : {credit}</p>
        </button>
        <p className='text-gray-600 max-sm:hidden pl-4'>Hii..{user.name}</p>
        <div className='relative  group '>
          <img src={assets.profile_icon} className='w-10 deap-shadow' alt="" />
          <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
            <ul className='list-none m-0 p-2 bg-white  rounded-md border text-sm'>
              <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
            </ul>
          </div>
        </div>
       </div>
       :
        <button onClick={()=> setShowLogin(true)} className='bg-zinc-800 text-white flex items-center gap-4 px-4 px-2 sm:px-8 sm : py-3 text-sm rounded-full '>Get Started 
        <img  src={assets.arrow_icon} alt="" />
      </button>}
    </div>
  )
}

export default Navbar
