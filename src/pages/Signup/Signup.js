import React from 'react';
import Navbar from '../../components/Navigation/Navbar';
import "../../styles/login-signup.css";

const Login = () => {
    return (
        <div>
            <Navbar/>
            <div className="login-section flex-row">
                <form className="login-container flex-column">
                    <h1>Login</h1>
                    <div className="login-credentials-container flex-column ">
                    <div className="login-credential-field flex-column">
                            <label htmlFor="email">First name</label>
                            <input type="text" name="firstName" placeholder="prajwal" />
                        </div>
                        <div className="login-credential-field flex-column">
                            <label htmlFor="email">Email address</label>
                            <input type="text" name="lastName" placeholder="sakle" />
                        </div>
                        <div className="login-credential-field flex-column">
                            <label htmlFor="email">Email address</label>
                            <input type="text" name="email" placeholder="abc@gmail.com" />
                        </div>
                        <div className="login-credential-field flex-column">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="**********" />
                        </div>
                    </div>
                    <div className="checkbox-link-input flex-row">
                        <div className="checkbox-input">
                            <input type="checkbox" id="term&condition"/>
                            <label htmlFor="term&condition">Remember me</label>
                        </div>
                        <a href="#">Forgot your password?</a>
                    </div>
                    <button type='submit' className="btn text-button">Sign Up</button>
                    <button class="btn login-link-button"><a href="https://spactrend.netlify.app/login.html">Already have an Account?</a></button>
                </form>
            </div>
        </div>
    );
};

export default Login;