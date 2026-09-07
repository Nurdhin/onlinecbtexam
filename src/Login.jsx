import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { userData } from './data';
import Header from './Header';



const Login = () => {

    const navigate = useNavigate();
    
    // state management
    const [formData, setFormData] = useState({});
    const [data, setData] = useState(userData)

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    // //check for user login
    // useEffect(() => {
    //     setIsLoggedIn(false)
    // }, [])

    // if (isLoggedIn) {
    //    return <Navigate to="/" />
    // } else {
    //   return  <Navigate to="/register" />
    // }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => (
            {
                ...prevData,
                [name]:value
            }))
        if (error) setError('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (error) setError('');

        if (!formData.username || !formData.email) {
            setError('Field should not be empty')
            return;
        }

        setIsLoading(true)
        const {username, email} = formData;

        try {
            const user = data.find(user => user.email === email);

            if (user) {
                navigate(`/question/${user.firstName}`, {replace:true} )
            }
            
        } catch (error) {
            console.log(error)
        }



    }


    return(
        <>
        <Header />
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-header">
                    <h2>Welcome Back</h2>
                    <p>Please enter your details to sign in</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">

                    {error && <div  className="error-message">{error}</div> }

                    <div className="input-group">
                        <label htmlFor="">
                            Username :
                            <input 
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                disabled={isLoading}
                                placeholder="username"
                                required
                            />
                        </label>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">
                            Email :
                            <input 
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isLoading}
                                placeholder="you@email.com"
                                required 
                            />
                        </label>
                    </div>
                    <button type="submit" className="submit-button" disabled={isLoading}>
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
                <p className="signup-prompt">
                        Don't have an account?<Link to="/register">
                            <a href="#signup" className="signup-link">Sign up</a>
                        </Link> 
                </p>
            </div>

        </div>
       
        </>
      
    );
};
export default Login;