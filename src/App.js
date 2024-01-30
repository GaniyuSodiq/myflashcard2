import logo from "./logo.svg";
import "./App.css";

const questions = [
  { id: 1, question: "What's ur name", answer: "My name is Sidiq" },
  { id: 1, question: "What's ur surname", answer: "My name is Ganiyu" },
  { id: 1, question: "What's ur middle name", answer: "My name is Olaniyi" },
  { id: 1, question: "What's ur role", answer: "My role is ATTS Executive" },
  {
    id: 1,
    question: "What's ur goal",
    answer: "My goal is to be fantastic SE",
  },
];

function App() {
  return (
    <div className="App">
      {questions.map((question) => (
        <div>{question.question}</div>
      ))}
    </div>
  );
}

export default App;
