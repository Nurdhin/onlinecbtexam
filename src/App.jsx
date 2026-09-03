import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Question from "./QuestionPage";


function App() {

  return (
   <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
   
    
   </div>
  )
}

export default App
