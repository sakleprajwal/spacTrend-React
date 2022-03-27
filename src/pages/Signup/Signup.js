import React from 'react';
import "../../styles/login-signup.css";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="login-section flex-row">
                <form className="login-container flex-column">
                    <h1>Signup</h1>
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
                    </div>
                    <button type='submit' className="btn text-button">Sign Up</button>
                    <button className="btn login-link-button"><Link to="/login">Already have an account?</Link></button>
                </form>
            </div>
        </div>
    );
};

export default Login;