import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../prividers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password)

        //Create User
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="pb-10">
            <Navbar></Navbar>
            <div className="">
        <h2 className="text-3xl my-5 text-center">Please Register</h2>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text">PhotoUrl</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Your Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center mt-4">Already have an account ? <Link to="/login" className="text-red-600 font-bold">Login</Link></p>
      </div>
        </div>
    );
};

export default Register;