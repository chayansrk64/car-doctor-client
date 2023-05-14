import loginImg from "../../assets/images/login/login.svg";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from 'react';
 
const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const  from = location.state?.from?.pathname || "/";
    // console.log(from);
    
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password}
        console.log(user);

        signInUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            const loggedUser = {
              email: user.email
            }
            if(user){
              alert("Login Successfully")
            }
           
            fetch('http://localhost:5000/jwt', {
              method: "POST",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(data => {
              console.log("jwt response",data);
              // warning localstorage is not the best place to store the jwt access token(second best)
              localStorage.setItem('car-access-token', data.token)
              navigate(from, { replace: true });

            })


        })
        .catch(error => console.log(error))

    }

    
  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card w-1/2  max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center mt-5 font-bold">Login now!</h1>
          <div className="card-body">
            <form onSubmit={handleLogin}>
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
                  value="Login"
                />
              </div>
            </form>
            <div>
                <p>New to car doctor? <Link to="/register" className="text-orange-500 font-bold"> SignUp  </Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
