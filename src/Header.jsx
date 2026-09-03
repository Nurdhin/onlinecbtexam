import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const  Header = () =>  {
    return(
        <>
            <header className="site-header">
                {/* website logo */}
                <Logo logo="JOBI" name="CBT EXAM" />

                {/* Navigation link */}
                <nav className="main-nav">
                    <ul>
                        <li><a href="#" className="">Home</a></li>
                        <li><a href="#" className="">About</a></li>
                        <li><a href="#" className="">Service</a></li>
                        <li><a href="#" className="">Contact</a></li>
                        
                    </ul>
                </nav>
                {/* button */}
                <div className="btn">
                    <Link to='/register'><a href="" className="btn">Register</a></Link>
                </div>
                
            </header>
            
        </>
    );
    
};
export default Header;