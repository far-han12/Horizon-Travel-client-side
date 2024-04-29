import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import NavBar from "../Components/NavBar";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { BiSolidLogInCircle } from "react-icons/bi";
import { useContext, useState } from "react";
// import { toast } from "react-toastify";
import toast from 'react-hot-toast';

import { Helmet } from "react-helmet-async";
import Footer from "../Components/Footer";

const Login = () => {
  const {loginuser,googleLogin,githubLogin,user,logout} = useContext(AuthContext)
  const [registerError ,setregistererror]=useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const handleLogin = (e) => {

    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log( email, password);
    setregistererror("")
    // if(password === password){
    //   toast.error("Password didn't match")
    //   return
    // }
    // signin user
    loginuser(email,password)
    .then((userCredential) => {
      Swal.fire({
        position: "middle",
        icon: "success",
        title: "Logged in Successfully",
        showConfirmButton: false,
        timer: 1500
      });

    navigate(location?.state ? location.state : '/login');
 
      })
      e.currentTarget.reset()
      .catch((error) => {
        toast.error('Wrong Password or email');
        setregistererror(error.message)
      });
  }
  const handleGoogleLogin =()=>{
    googleLogin()
    .then(result => {
        console.log(result.user)
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Logged in Successfully",
          showConfirmButton: false,
          timer: 1500
        });
    navigate(location?.state ? location.state : '/login');
    })
    .catch(error => {
        toast.error('Wrong Password or email');
        setregistererror(error.message)
    })
  }
  const handlegithubLogin=()=>{
githubLogin()
.then(result => {
  const user = result.user;
  console.log(user);
  Swal.fire({
    position: "middle",
    icon: "success",
    title: "Logged in Successfully",
    showConfirmButton: false,
    timer: 1500
  });
navigate(location?.state ? location.state : '/login');
})
.catch(error => {
  toast.error('Wrong Password or email');
  setregistererror(error.message)
})
  }


    return (
      
        <div   >
            <Helmet>
                <title>Login</title>
            </Helmet>
        <NavBar></NavBar>
        <h2 className="text-5xl font-bold my-5 text-center">Please login!</h2>


<div  className="card shrink-0 w-full max-w-sm shadow-2xl mx-auto mb-10 bg-base-100">
<form onSubmit={handleLogin}  className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    {registerError && <p className="text-red-500 text-sm">{registerError}</p>
            
          }
    <div className="form-control mt-5 ">
      <button  className="btn bg-cyan-300 hover:bg-cyan-400"><BiSolidLogInCircle></BiSolidLogInCircle> Login</button>
    </div>
  
    <div className="divider text-sm">Or Sign In With</div>
    <div className="form-control ">
    
      <button onClick={handleGoogleLogin} className="btn bg-[#F4B400] hover:bg-yellow-400 text-white"><FaGoogle></FaGoogle> Google</button>
    </div>
    <div className="form-control ">
    
      <button onClick={handlegithubLogin} className="btn bg-black hover:bg-slate-700 text-white">    <FaGithub></FaGithub> Github</button>
    </div>
    <p className="text-center mt-4">Do not have an account ? <Link className="text-cyan-600 font-bold" to="/register">Register</Link></p>
  </form>
</div>
<Footer></Footer>
</div>
    );
};

export default Login;