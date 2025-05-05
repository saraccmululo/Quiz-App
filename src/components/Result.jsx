

const Result = ({userAnswers, questionBank, handleRestart}) => {

  function getScore() {
    let correctAnswers = 0;
    userAnswers.forEach((answer, index) => {
      if (answer===questionBank[index].answer){
        correctAnswers++;
      }
    })
    return correctAnswers;
  }

  const score=getScore()

  return (
    <div>
      <h2>Quiz Completed</h2>
      <p>Your Score: {score}/{questionBank.length}</p>

      <button className="restart-button" onClick={handleRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
