import { React, useState } from 'react';
import "../../styles/login-signup.css";
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/authentication-context/auth-context';

const Signup = () => {
    const initialFormData = { email: "", password: "", firstName: "", lastName: "" };

    const [signupForm, setSignupForm] = useState(initialFormData);
    const { email, password, firstName, lastName } = signupForm;
    const { setIsLoggedIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || "/"

    const signupSubmitHandler = (e) => {
        e.preventDefault();
        (async () => {
          try {
            const { data: { user, encodedToken } } = await axios.post("/api/auth/signup", { email, password, firstName, lastName });
            if (encodedToken) {
              localStorage.setItem("token", encodedToken)
              setIsLoggedIn(true);
              Toaster({message: "Registered Successfully", type: "success"});
            }
            navigate(from, {replace: true})
          }
          catch (err) {
            Toaster({message: "User already exist", type: "error"});
          }
        })()
    }

    function SignupFormHandler(e) {
        const { name, value } = e.target;
    
        setSignupForm(oldFormData => ({ ...oldFormData, [name]: value }))
    }

    return (
        <div>
            <div className="login-section flex-row">
            
                <form className="login-container flex-column" onSubmit={signupSubmitHandler}>
                    <h1>Signup</h1>
                    <div className="login-credentials-container flex-column ">
                        <div className="login-credential-field flex-column">
                            <label htmlFor="email">First Name</label>
                            <input type="text" name="firstName" placeholder="Prajwal" defaultValue={signupForm.firstName} onChange={SignupFormHandler} />
                        </div>
                        <div className="login-credential-field flex-column">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" placeholder="Sakle" defaultValue={signupForm.lastName} onChange={SignupFormHandler} />
                        </div>
                        <div className="login-credential-field flex-column">
                            <label htmlFor="email">Email address</label>
                            <input type="text" name="email" placeholder="abc@gmail.com" defaultValue={signupForm.email} onChange={SignupFormHandler} />
                        </div>
                        <div className="login-credential-field flex-column">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="**********" defaultValue={signupForm.password} onChange={SignupFormHandler} />
                        </div>
                    </div>
                    <div className="checkbox-link-input flex-row">
                        <div className="checkbox-input">
                            <input type="checkbox" id="term&condition"/>
                            <label htmlFor="term&condition">Remember me</label>
                        </div>
                    </div>
                    <button type='submit' className="btn text-button">Signup</button>
                    <button className="btn login-link-button"><Link to="/login">Already have an account?</Link></button>
                </form>
            </div>
        </div>
    );
};

export default Signup;