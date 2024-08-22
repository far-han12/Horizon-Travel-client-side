import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from '../Components/NavBar';
import { useContext, useState } from "react";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import   toast  from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import Footer from "../Components/Footer";
import Swal from "sweetalert2";
// import 'animate.css';
const Register = () => {
  const {createUser,updateUser} = useContext(AuthContext)
  const [registerError ,setregistererror]=useState('')
  const [showPassword,setShowPassword]=useState(false)
const navigate = useNavigate()
const handleRegister = (e) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const name = form.get('name');
  const photo = form.get('photo');
  const email = form.get('email');
  const password = form.get('password');
 
  console.log(name, photo, email, password);
  setregistererror('')
  // create user
  if(password.length<6){
    setregistererror('Password should be atleast 6 characters')
  toast.error('Password should be atleast 6 characters')
  return
  }
 if( !/(?=.*[A-Z])/.test(password)){
  setregistererror('Must have an uppercase letter')
  toast.error('Must have an uppercase letter')
  return
  }
  if(!/(?=.*[a-z])/.test(password)){
    setregistererror('Must have an lowercase letter')
    toast.error('Must have an lowercase letter')
  return
  }
  setregistererror('')
  createUser(email,password)
  .then((userCredential) => {
   
updateUser(name,photo)
.then(() => {
navigate('/')
})
Swal.fire({
  position: "middle",
  icon: "success",
  title: "Registered Successfully",
  showConfirmButton: false,
  timer: 1500
});
    
    })
    e.currentTarget.reset()

    .catch((error) => {
   toast.error(error.message);
   setregistererror(error.message)
    });
  
  
  

  }

    return (

      <div   className="">
       <Helmet>
                <title>Register</title>
            </Helmet>
      <NavBar></NavBar>
      <div data-aos="zoom-in" data-aos-duration="1500" className='hero h-full lg:min-h-[calc(100vh-70px)]   animate-delay-2s  ' >
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6 ">Embark on your journey  with Horizon Travel by your side. Explore our website today and discover the endless possibilities that await you. </p>
    </div>


      <div className="card shrink-0 w-full bg-base-100  max-w-sm shadow-2xl mx-auto ">
        <form onSubmit={handleRegister} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Name</span>
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="input input-bordered bg-transparent border-2 border-cyan-400 "
            />
          </div>
          <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered bg-transparent border-2 border-cyan-400 " />
                    </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text ">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered bg-transparent border-2 border-cyan-400 "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Password</span>
            </label>
          
            <div className="relative form-control">
             <input className="input input-bordered bg-transparent border-2 border-cyan-400  " type={showPassword ?'text' : "password"} name="password" id="" placeholder="Password" /> 
<span className="absolute right-4 top-4" onClick={()=>setShowPassword(!showPassword)}>{
showPassword ? <FaEye ></FaEye> : <FaEyeSlash></FaEyeSlash>
}</span>
</div>
            <label className="label">
              <a href="#" className="label-text-alt link  link-hover">
                Forgot password?
              </a>
            </label>
            {registerError && <p className="text-red-500 text-sm">{registerError}</p>
            
          }
          </div>
          <div className="form-control mt-6">
            <button className="btn hover:bg-cyan-400 bg-cyan-300 border-0 border-cyan-200">Register</button>
          </div>
          <p className="text-center  mt-4">
            Already have an account?{" "}
            <Link className="text-cyan-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </form>
     
      </div>
  </div>
</div>
<Footer></Footer>
</div>
    );
};

export default Register;