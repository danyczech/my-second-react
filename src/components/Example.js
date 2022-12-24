import "./Example.css";
import { useState } from "react";

const Example = () => {
  const [title, setTitle] = useState("Můj druhý React");
  const [buttonText, setButtonText] = useState("Původní tlačítko");

  const buttonHandler = () => {
    setTitle("Nový text z useState");
  };
  const button2Handler = () => {
    setTitle("Jiný název title");
  };
  const clearHandler = () => {
    setTitle("");
  };
  const changeButton = () => {
    setButtonText("Nové tlačítko");
  };

  return (
    <div className="all-buttons">
      <h1>{title}</h1>
      <button onClick={buttonHandler}>Změnit title</button>
      <button onClick={button2Handler}>Jiný title</button>
      <button onClick={clearHandler}>Clear title</button>
      <button onClick={changeButton}>{buttonText}</button>
    </div>
  );
};

export default Example;
