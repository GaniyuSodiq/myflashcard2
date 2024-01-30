import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const questions = [
  { id: 1, question: "What's ur name", answer: "My name is Sidiq" },
  { id: 2, question: "What's ur surname", answer: "My name is Ganiyu" },
  { id: 3, question: "What's ur middle name", answer: "My name is Olaniyi" },
  { id: 4, question: "What's ur role", answer: "My role is ATTS Executive" },
  {
    id: 5,
    question: "What's ur goal",
    answer: "My goal is to be fantastic SE",
  },
];

function App() {
  const [selectedId, setSelectedId] = useState(null);

  function clickHandle(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="App">
      {questions.map((question) => (
        <div
          onClick={() => clickHandle(question.id)}
          className={question.id === selectedId ? "answer" : ""}
        >
          {question.id === selectedId ? question.answer : question.question}
        </div>
      ))}
    </div>
  );
}

export default App;
