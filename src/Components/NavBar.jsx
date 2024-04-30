import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { FiAlignLeft } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx"
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Tooltip } from 'react-tooltip';
// import { AuthContext } from '../../AuthProvider';
const NavBar = () => {
const {user,logout} = useContext(AuthContext)
const [open,setopen]=useState(false)
const [theme, setTheme] = useState('light')
const handleToggle = e => {
  if (e.target.checked) {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}

useEffect(() => {
  localStorage.setItem('theme', theme)
  const localTheme = localStorage.getItem('theme')

  // add custom data-theme attribute
  document.querySelector('html').setAttribute('data-theme', localTheme)

}, [theme])

  const handlelogout = ()=>{
    logout()
    .then(() => {
      console.log("loggedout");
    }).catch((error) => {
console.log(error);
    });
  }
    const links = <>   
     <li><NavLink  to='/'  className={({isActive}) => {
           return isActive ? 'text-white border bg-cyan-600 hover:bg-cyan-800 rounded-lg p-2' : 'font-normal'
         }}>Home</NavLink></li>
     <li><NavLink to='/alltourists' className={({isActive}) => {
           return isActive ? 'text-white border bg-cyan-600 hover:bg-cyan-800 rounded-lg p-2' : 'font-normal'
         }}>All Tourists Spot</NavLink></li>
     <li><NavLink to='/addtourists' className={({isActive}) => {
           return isActive ? 'text-white border bg-cyan-600 hover:bg-cyan-800 rounded-lg p-2' : 'font-normal'
         }}>Add Tourists Spot</NavLink></li>
     <li><NavLink to='/mylist' className={({isActive}) => {
           return isActive ? 'text-white border bg-cyan-600 hover:bg-cyan-800 rounded-lg p-2' : 'font-normal'
         }}>My List</NavLink></li>
{
  user ? "":     <li><NavLink to='/register' className={({isActive}) => {
    return isActive ? 'text-white border bg-cyan-600 hover:bg-cyan-800 rounded-lg p-2' : 'font-normal'
  }}>Register</NavLink></li>
}
{
  user?"":
  <li><NavLink to='/login' className={({isActive}) => {
        return isActive ? 'text-white border bg-cyan-600 hover:bg-cyan-800 rounded-lg p-2' : 'font-normal'
      }}>Login</NavLink></li>
 
}
    
    </>

    return (
        <div className="navbar bg-base-100  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden" onClick={()=>{setopen(!open)}}>
            {
              open ===true?  <RxCross1 className='text-2xl'></RxCross1>:<FiAlignJustify className='text-2xl'></FiAlignJustify>
            }
            </div>
          {
            open===true ?   <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52    ">
           {links}
          </ul>:''
          }
        
          </div>
       <div className='flex gap-2 items-center'> 
       <img src="https://i.ibb.co/0msGQKh/images-1.png"  className='w-10 ' alt="" />
          <a className="text-xs md:text-2xl lg:text-3xl flex items-center font-bold font-merriweather">Horizon Travel</a>
          </div>
        
        </div>
     
        <div className="navbar-center hidden lg:flex">
          <ul className="menu active menu-horizontal space-x-1 px-1">
            {links}
          
       
          </ul>
        </div>
        <div className="navbar-end">
        <label className='cursor-pointer mr-2 grid place-items-center'>
          <input
            type='checkbox'
            onChange={handleToggle}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
        {
          user ? <>
          {/* <div tabIndex={0} role="button" className=" btn-circle avatar tooltip tooltip-left flex items-center"  data-tip={user.displayName || 'user name not found'}> */}
        
<div className='pr-2'
  data-tooltip-id="my-tooltip"
  data-tooltip-content={user.displayName || 'user name not found'}
  
>

        <div className=" rounded-full   avatar  flex items-center h-8  w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 border ">
         <img alt="" className='rounded-full' src={user?.photoURL} />
        </div>
        <Tooltip id="my-tooltip" />
</div>

        
      {/* </div> */}
      <Link  onClick={handlelogout} to='/' className="btn bg-cyan-400 text-black hover:bg-cyan-400">LogOut</Link>
          </> : <Link to='/login' className="btn bg-cyan-300 hover:bg-cyan-400">Login</Link>
         
         } 
      
        </div>
      </div>
    );
};

export default NavBar;