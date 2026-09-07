import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './qst';
import Header from './Header';


const Question = () => {

  const { id } = useParams();

  // state variables
  const [question, setQuestion] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [show, setShow] = useState(false)
  const [toggle, setToggle] = useState(false);

  const nextQuestion = () => {
    if (currentIndex < question.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    };
    getScore()
  }

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1)
    };
  };

   const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    return array;
  }

  //function to generate options
  const generateOption = (new_array, correct_answer) => {
    let options = [...new_array, correct_answer]
    // let newOptions = shuffle([...options])
    const newOptions  = [...options].toSorted();
    return newOptions;
  }

  // function handle change
  const handleChange = (event) => {
    setAnswer(event.target.value);
  }

  function getScore() {
    const correctAnswer = question[currentIndex].correct_answer
    if (correctAnswer === answer) {
      setScore(prevScore => prevScore + 1)
    } 
    if ( currentIndex + 1 === question.length - 1) {
      setIsDisabled(true)
    }

  }
  // get total score
  const getTotalScore = () => {
    if ( currentIndex + 1 === question.length ) {
      getScore()
      setShow(true);
      setToggle(true)
    }
    

  }



  // get current index
  const currentQuestion = question[currentIndex];
  const currentOption = generateOption(currentQuestion.incorrect_answers, currentQuestion.correct_answer)


  return(
    <>
    <Header />
    <div className="form-container">
      <div className="contact-form">
        <form >
          <h2>Welcome to online cbt {id} </h2>
          <p> Question {currentIndex + 1} of {question.length}</p>
          <p>{currentQuestion.question}</p>

            {currentOption.map((option, index) => {
              return(
                <div key={index} className="form-group">
                  <label htmlFor="" className="form-label">
                    <input 
                      type="radio"
                      name="option"
                      value={option}
                      checked={answer === option}
                      onChange={handleChange}
                      className="question-input"
                    />
                    {option}
                  </label>
                </div>
                
              )
            })}


        </form>
        <button className="btn" onClick={nextQuestion} disabled={currentIndex === question.length - 1}>Next</button>
        <button className={` btn-one ${ toggle ? 'button-disable':'' }`} onClick={prevQuestion} disabled={currentIndex === 0}>Previous</button>
        {isDisabled? 
          <button className='btn' onClick={getTotalScore}>Finish quiz</button>
           :""}

           {show?<p>Your total score is {score}</p> :""}
      </div>
      
      
    </div>
    </>
  );
};

export default Question;