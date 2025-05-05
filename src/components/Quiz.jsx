import { useState } from "react";
import Result from "./Result";

const Quiz = () => {
  const questionBank = [
    {
      question: "What's the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language is used for web apps?",
      options: ["PHP", "Python", "JavaScript", "All"],
      answer: "All",
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax eXtension",
        "Just a Simple Example",
        "None of the above",
      ],
      answer: "JavaScript XML",
    },
  ];

  const [userAnswers, setUserAnswers] = useState([null, null, null]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const selectedAnswer = userAnswers[currentQuestion];

  function handleSelectOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;
    setUserAnswers(newUserAnswers);
  }

  function goToNext() {
    if (currentQuestion === questionBank.length - 1) {
      setIsQuizFinished(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  }

  function goToPrev() {
    if (currentQuestion > 0) setCurrentQuestion((prev) => prev - 1);
  }
  const handleRestart = () => {
    setUserAnswers([null, null, null]);
    setCurrentQuestion(0);
    setIsQuizFinished(false);  
  }

  if (isQuizFinished) {
    return (
      <Result
        userAnswers={userAnswers}
        questionBank={questionBank}
        handleRestart={handleRestart}
      />
    );
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p className="question">{questionBank[currentQuestion].question}</p>
      {questionBank[currentQuestion].options.map((option, key) => (
        <button
          className={"option" + (selectedAnswer === option ? " selected" : "")}
          key={key}
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        <button onClick={goToPrev} disabled={currentQuestion === 0}>
          Previous
        </button>

        <button onClick={goToNext} disabled={!selectedAnswer}>
          {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
