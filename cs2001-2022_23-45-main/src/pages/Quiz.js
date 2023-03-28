import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { questions } from "./Question";
//import { useState } from "react";
//import img from '../assets/28942DB3-98C0-4321-88E3-39E8E60E467F.jpeg';
//import img1 from '../assets/DFF7F800-D879-43C3-800F-6AE543FECCA2.jpeg';
//import img2 from '../assets/E91238C4-8AD3-4807-B9C6-CDA4381D1E0A.jpeg';
//import img3 from '../assets/F411A803-50C0-4AD2-AE70-B33300E25AA9.jpeg';

export default function App() {
  const [questionList, setQuestionList] = useState([]);
  const [loading, setloading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answerIndex, setAnswerIndex] = useState(null);

  useEffect(() => {
    setloading(true);
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQuestionList(shuffled.slice(0, 5));
    setloading(false);
  }, [])

  const handleClick = (isCorrect, inx) => {
    setAnswerIndex(inx + 1)
    if (isCorrect) {
      setScore(score + 1);
    }   
  };

  
  function nextQuestion() {
    if (answerIndex === null) {
           alert("Please answer all questions.");     
           return;   
          }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionList.length) {
      setCurrentQuestion(nextQuestion);
      setAnswerIndex(null)
    } else {
      setShowScore(true);
    }
  }
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="container_quiz">
      <div className='image_container'>
        {/* <img src={img1} className='img_1' alt='' /> */}
        {/* <img src={img3} className='img_3' alt='' /> */}
      </div>
      <div className="app">
        {showScore ? (
          <section className="showScore-section">
            <div>Your score is {score} out of {questionList.length}</div>
          </section>
        ) : (
          <>
            <section className="question-section">
              <h1>
                Question {currentQuestion + 1}/{questionList.length}
              </h1>
              <p>{questionList[currentQuestion].questionText}</p>
            </section>

            <section className="answer-section">
              {
                answerIndex ?
                  questionList[currentQuestion].answerOptions.map((item, inx) => (
                    <button key={inx} className={answerIndex === inx + 1 && item?.isCorrect ? 'correct' : answerIndex === inx + 1 && 'wrong'}>
                      {item.answerText}
                    </button>))
                  :
                  questionList[currentQuestion].answerOptions.map((item, inx) => (
                    <button key={inx} onClick={() => handleClick(item.isCorrect, inx)}>
                      {item.answerText}
                    </button>
                  ))}
              <button onClick={nextQuestion}>Next Question</button>
            </section>
          </>
        )}
      </div>
      <div className='image_container'>
        {/* <img src={img} className='img' alt='' /> */}
        {/* <img src={img2} className='img_2' alt='' /> */}
      </div>
    </div>
  );
}