import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import '../styles/Login.css'
import Navbar from "../Navbarfiles/Navbar";

const Login = () => {
    const [ isactive, setIsactive] = useState(false)
    const [resgister, setRegister] = useState({name:'', email:'', password:'', password2:'',})
    const [login, setLogin] = useState({lemail:'', lpwd:'',})

    const slide= ()=>{
        setIsactive(current => !current)
    }
  return (
    <div>
        <Navbar />
    <div className="login-wrapper">
<div className={!isactive ? "container" :'container right-panel-active'} id="container">
	<div className="form-container sign-up-container">
		<form action="#" method="POST">
			<h1>Create Account</h1>
			<div className="social-container">
				<Link to="/" className="social"> <FaFacebookF/> </Link>
				<Link to="/" className="social"> <FaFacebookF/> </Link>
				<Link to="/" className="social"> <FaFacebookF/> </Link>
				<Link to="/" className="social"> <FaFacebookF/> </Link>

			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" value={resgister.name} onChange={(e)=>{setRegister({name: e.target.value})}}/>
			<input type="email" placeholder="Email" value={resgister.email} onChange={(e)=>{setRegister({email: e.target.value})}}/>
			<input type="password" placeholder="Password" value={resgister.password} onChange={(e)=>{setRegister({password: e.target.value})}}/>
			<input type="password" placeholder="Confirm Password" value={resgister.password2} onChange={(e)=>{setRegister({password2:e.target.value})}}/>
			<button>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#" method="POST">
			<h1>Sign in</h1>
			<div className="social-container">
				<Link to="/" className="social"> <FaFacebookF/> </Link>
				<Link to="/" className="social"> <FaFacebookF/> </Link>
				<Link to="/" className="social"> <FaFacebookF/> </Link>
				<Link to="/" className="social"> <FaFacebookF/> </Link>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" value={login.lemail} onChange={(e)=>{setLogin({lemail: e.target.value})}} />
			<input type="password" placeholder="Password" value={login.lpwd} onChange={(e)=>{setLogin({lpwd: e.target.value})}} />
			<a href="#">Forgot your password?</a>
			<button >Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button onClick={slide} className="ghost" id="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button onClick={slide} className="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>

    </div>
    </div>
  );
};

export default Login;
