import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password)

        // create User
        createUser(email, password)
        .then(Result => {
            console.log(Result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
      <Navbar></Navbar>
      <h2 className='text-2xl font-poppins font-semibold text-center'>Please Register</h2>
      <div>
      <div className='mx-auto md:w-3/4 lg:w-1/2 bg-gray-100 rounded-lg'>
      <form onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className='text-center text-xl mt-4'>Already have an account.<Link className='text-red-600 font-poppins font-semibold' to="/login">Login</Link></p>
    </div>
    </div> 
        </div>
    );
};

export default Register;