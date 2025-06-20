import React, { useContext } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location)
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

       // sign in
       signIn(email, password)
       .then(result => {
        console.log(result.user)
        // navigate user this page login
        navigate(location?.state ? location.state : "/")
       })
       .catch(error => {
        console.log(error)
       })
    }
    return (
        <div>
      <Navbar></Navbar>
      <h2 className='text-2xl font-poppins font-semibold text-center'>Please Login</h2>
      <div className='mx-auto md:w-3/4 lg:w-1/2 bg-gray-100 rounded-lg'>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='text-center text-xl mt-4'>Don't have an account?<Link className='text-red-600 font-poppins font-semibold' to="/register">Register</Link></p>
    </div>
    </div>
    );
};

export default Login;