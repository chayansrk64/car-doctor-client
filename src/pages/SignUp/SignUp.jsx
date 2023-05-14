import loginImg from "../../assets/images/login/login.svg";
import {Link} from 'react-router-dom'
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from 'react';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name, email, password}
        console.log(user);

        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user);
        } )
        .catch(error => console.log(error))


    }

    return (
        <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card w-1/2  max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center mt-5 font-bold">Register now!</h1>
          <div className="card-body">
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="SignUp"
                />
              </div>
            </form>
            <div>
                <p>Already have an account? <Link to="/login" className="text-orange-500 font-bold"> SingIn  </Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;