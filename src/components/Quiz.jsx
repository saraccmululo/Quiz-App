import { useState } from "react";

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

  const initialAnwers =[null, null, null];

  const [userAnswers, setUserAnswers] = useState(initialAnwers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  

  function handleSelectOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;
    setUserAnswers(newUserAnswers);
  }

  return (
    <div>
      <h2>Question 1</h2>
      <p className="question">{questionBank[currentQuestion].question}</p>
      {questionBank[currentQuestion].options.map((option, key) => (
        <button
          className="option"
          key={key}
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Quiz;
