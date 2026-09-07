import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { userData } from './data';
import Login from './Login';
import Header from './Header';



function Register() {

    // Initialize state as an object representing form fields
    const [formData, setFormData] = useState({});
    const [isValid, setIsValid] = useState(true);

    // A single generic change handler for all fields
    const handleChange = (event) => {
        const {name, value} = event.target 
        // 
        setFormData(( prevData) => (
        {
            ...prevData, 
            [name]:value 
        }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {firstName, lastName, email, subject, gender, image } = formData
        let id = Math.floor(Math.random() * 10 )
        const data = {
            id,
            firstName,
            lastName,
            email,
            subject,
            gender,
            image
        }
        userData.push(data)


        console.log(userData)
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            gender: "",
            image: ""
        })
    }




    const handleBlur = () => {
        // check for valid email
        setIsValid(formData.email.includes('@'))
    }
    const {firstName, lastName, email, subject, gender, image } = formData
    // console.log(formData.firstName)

    
    return(
        <>
        <Header />
        <div className="form-container">

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="" className="form-label">
                        First Name:
                        <input 
                            type="text" 
                            name="firstName" 
                            value={formData.firstName}
                            onChange={handleChange}
                            className="form-input" 
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">
                    Last Name:
                        <input 
                            type="text" 
                            name="lastName" 
                            value={formData.lastName}
                            onChange={handleChange}
                            className="form-input" 
                        />
                    </label>
                </div>
                <div className="form-group" >
                    <label htmlFor="" className="form-label">
                    Email:
                        <input 
                            type="text" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input" 
                            onBlur = {handleBlur}
                        />
                        {!isValid && <p style={{ color: 'red', marginTop: '5px'}}>Invalid email address</p>}
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">
                        Subject:
                        <select className="form-input" name="subject" value={formData.subject} onChange={handleChange} >
                            <option value="">..Select subject..</option>
                            <option value="General paper">General Paper</option>
                            <option value="English">English</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <p className="form-label">Select Your Gender &nbsp;</p>
                        <label htmlFor="" className="form-label-g">
                            <input 
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleChange}
                            />
                            Male &nbsp;
                        </label>
                    <label htmlFor="" className="form-label-g">
                        <input 
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
                            className={{ marginBottom: '10px'}}
                        />
                        Female
                    </label>
                </div>
               <div className="form-group">
                    <label htmlFor="" className="form-label">
                    Image Upload:
                        <input 
                            type="file"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </label>
               </div>

               <div className="btn-container">
                     <button type="submit" className="form-button">Register</button>
                    <Link to="/login" className="form-button">
                        <button type="submit" className="form-button">Login</button>
                    </Link>
               </div>
               
                    
            </form>

        

        </div>
        </>
    );

};

export default Register