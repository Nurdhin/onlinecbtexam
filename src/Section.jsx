import React from 'react';
import cbt3 from './assets/cbt3.png'

const Section = () => {
    return(
        <>
            <div className="main-container">
                <div className="left-container" >
                    <h1>Master CBT Exams With Confidence</h1>
                    <p>Boost your exam confidence with our CBT learning platform.Get sharp
                        targeted insights across standardized test topics, run quick knowledge
                        checks, and practice with exam-style CBT questions covering 
                        more than 1,000 topics of interest.
                    </p>
                    <div className="btn-container">
                        <a href="#" className="big-btn-1">Get started For Free</a>
                        <a href="#" className="big-btn-2">Browse Exams</a>
                    </div>
                </div>
                <div className="right-container">
                    <img src={cbt3} alt="cbt" className="image" srcset="" height="480" width="680" />
                </div>
            </div>
        </>
    );
};

export default Section