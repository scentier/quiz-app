import { useState } from "react";
import "./App.css";

function App() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const quiz = [
    {
      question: "What is React.js Language used?",
      answers: ["javascript", "C", "Java", "Python"],
      correctAnswer: "javascript",
    },
    {
      question: "What is CSS used with?",
      answers: ["C++", "C", "Java", "html"],
      correctAnswer: "html",
    },
  ];

  const questionAnswer = quiz[quizIndex];

  return (
    <>
      {quizIndex >= quiz.length ? (
        <>
          <h1>Your Score: {score}</h1>
          <div className="card">
            <button onClick={() => setQuizIndex(0)}>Try Again</button>
          </div>
        </>
      ) : (
        <>
          <h1>{questionAnswer.question}</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (selectedAnswer === questionAnswer.correctAnswer) {
                setScore(score + 1);
              }
              setQuizIndex(quizIndex + 1);
            }}
          >
            <div className="card">
              {questionAnswer.answers.map((answer) => (
                <label key={answer}>
                  <input
                    onChange={() => setSelectedAnswer(answer)}
                    type="radio"
                    name="answer"
                    value={answer}
                  />{" "}
                  {answer}
                </label>
              ))}
              <p>
                <button type="submit">submit</button>
              </p>
            </div>
          </form>
        </>
      )}
      <p className="read-the-docs">A simple React.js Quiz App</p>
    </>
  );
}

export default App;
