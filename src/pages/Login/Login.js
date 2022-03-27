import React from 'react';
import "../../styles/login-signup.css";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div class="login-section flex-row">
                <div class="login-container flex-column">
                    <h1>Login</h1>
                    <div class="login-credentials-container flex-column ">
                        <div class="login-credential-field flex-column">
                            <label for="email">Email address</label>
                            <input type="text" placeholder="abc@gmail.com" />
                        </div>
                        <div class="login-credential-field flex-column">
                            <label for="password">Password</label>
                            <input type="text" placeholder="**********" />
                        </div>
                    </div>
                    <div class="checkbox-link-input flex-row">
                        <div class="checkbox-input">
                            <input type="checkbox" id="term&condition" />
                            <label for="term&condition">Remember me</label>
                        </div>
                        <a href="#">Forgot your password?</a>
                    </div>
                    <button class="btn text-button">Login</button>
                    <button className="btn login-link-button"><Link to="/signup">Create New Account</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Login;