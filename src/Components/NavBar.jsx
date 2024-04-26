import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { FiAlignLeft } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx"
import { AuthContext } from '../AuthProvider/AuthProvider';
// import { AuthContext } from '../../AuthProvider';
const NavBar = () => {
const {user,logout} = useContext(AuthContext)
const [open,setopen]=useState(false)
  const handlelogout = ()=>{
    logout()
    .then(() => {
      console.log("loggedout");
    }).catch((error) => {
console.log(error);
    });
  }
    const links = <>   
     <li><NavLink  to='/'>Home</NavLink></li>
     {/* <li><NavLink to='/alltourists'>All Tourists Spot</NavLink></li> */}
     <li><NavLink to='/addtourists'>Add Tourists Spot</NavLink></li>
     <li><NavLink to='/register'>Register</NavLink></li>
     <li><NavLink to='/login'>Login</NavLink></li>
    
    
    </>

    return (
        <div className="navbar bg-base-100 ">
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
          <ul className="menu active menu-horizontal px-1">
            {links}
          
       
          </ul>
        </div>
        <div className="navbar-end">
        {
          user ? <>
          <div tabIndex={0} role="button" className=" btn-circle avatar tooltip tooltip-left flex items-center"  data-tip={user.displayName || 'user name not found'}>
        <div className=" rounded-full  h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 border ">
       <Link to='/updateprofile'>   <img alt=""  src={user?.photoURL} /></Link>
        </div>
      </div>
      <Link  onClick={handlelogout} to='/' className="btn bg-cyan-400  hover:bg-cyan-400">LogOut</Link>
          </> : <Link to='/login' className="btn bg-cyan-300 hover:bg-cyan-400">Login</Link>
         
         } 
      
        </div>
      </div>
    );
};

export default NavBar;