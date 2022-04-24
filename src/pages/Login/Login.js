import { React, useState } from 'react';
import "../../styles/login-signup.css";
import axios from 'axios';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../../hooks/authentication-context/auth-context';
import Toaster from '../../components/Toaster/Toaster';

const Login = () => {
    const initialFormData = { email: "", password: "" };

    const [loginForm, setLoginForm] = useState(initialFormData);
    const { email, password } = loginForm;
    const { setIsLoggedIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || "/";

    const loginSubmitHandler = (e) => {
        e.preventDefault();
        (async () => {
          try {
            const res = await axios.post("api/auth/login", { email, password });
            if (res.status === 200) {
              localStorage.setItem("token", res?.data?.encodedToken)
              setIsLoggedIn(true);
            }
            Toaster({message: "Logged in Successfully", type: "success"});
            navigate(from, {replace:true})
          }
          catch (err) {
            Toaster({message: "Incorrect credentials", type: "error"});
          }
        })()
    }

    function loginFormHandler(e) {
        const { name, value } = e.target;
    
        setLoginForm(oldFormData => ({ ...oldFormData, [name]: value }))
    }

    return (
        <div>
            <div className="login-section flex-row">
            
                <form className="login-container flex-column" onSubmit={loginSubmitHandler}>
                    <h1>Login</h1>
                    <div className="login-credentials-container flex-column ">
                        <div className="login-credential-field flex-column">
                            <label htmlFor="email">Email address</label>
                            <input type="text" name="email" placeholder="sakleprajwal@gmail.com" defaultValue={loginForm.email} onChange={loginFormHandler} />
                        </div>
                        <div className="login-credential-field flex-column">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="prajwal" defaultValue={loginForm.password} onChange={loginFormHandler} />
                        </div>
                    </div>
                    <div className="checkbox-link-input flex-row">
                        <div className="checkbox-input">
                            <input type="checkbox" id="term&condition"/>
                            <label htmlFor="term&condition">Remember me</label>
                        </div>
                        <a href="#">Forgot your password?</a>
                    </div>
                    <button type='submit' className="btn text-button">Login</button>
                    <button className="btn login-link-button"><Link to="/signup">Create New Account</Link></button>
                </form>
            </div>
        </div>
    );
};

export default Login;