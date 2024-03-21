import { useState } from "react";
import "./App.css";

const Counter = () => {
  const [initialValue, setCount] = useState(0);

  return (
    <div>
      <p>{initialValue}</p>
      <button onClick={() => setCount(initialValue + 1)}>Increment</button>
      <button onClick={() => setCount(initialValue - 1)}>Decrement</button>
    </div>
  );
};

const BackgroundToggler = () => {
  const [isLightBlue, setColor] = useState(true);
  return (
    <div>
      <button
        style={{ background: isLightBlue ? "lightblue" : "grey" }}
        onClick={() => setColor(!isLightBlue)}
      >
        Toggle Backgound
      </button>
    </div>
  );
};

const MessageToggler = () => {
  const [visibility, setVisibility] = useState(false);
  const text = "This is a togglable message!";

  return (
    <div>
      <button onClick={() => setVisibility(!visibility)}>
        {visibility ? "Hide Message" : "Show Message"}
      </button>
      <p>{visibility ? text : ""}</p>
    </div>
  );
};

const TextColorToggler = () => {
  const [greenColor, setColor] = useState(false);
  return (
    <div>
      <p style={greenColor ? { color: "green" } : { color: "red" }}>
        Text Color Toggler
      </p>
      <button onClick={() => setColor(!greenColor)}>Toggle Color</button>
    </div>
  );
};
/* 
const FruitSelecctor = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  const fruitsList = fruits.map((currentValue, index) => {
    const [currentFruit, setFruitDetails] = useState(false);
    const text = "You selected:" + currentFruit;
    return (
      <>
        <li onClick={() => setFruitDetails(!currentFruit)}>{currentValue}</li>
      </>
    );
  });

  return (
    <div>
      <h2>Select a Fruit</h2>
      <ul>{fruitsList}</ul>
      <p>{currentFruit ? text : ""}</p>
    </div>
  );
}; */

//Important, got struck many times

const FruitSelector = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
  const [currentFruit, setSelectedFruit] = useState(null);

  const fruitList = fruits.map((fruit, index) => (
    <li
      key={index}
      onClick={() => setSelectedFruit(fruit)}
      style={{ cursor: "pointer" }}
    >
      {fruit}
    </li>
  ));

  const displaySelectedFruit = () => {
    return currentFruit ? <p>You Selected: {currentFruit}</p> : null;
  };

  return (
    <div>
      <ul>{fruitList}</ul>
      {displaySelectedFruit()}
    </div>
  );
};
export default function App() {
  return (
    <main>
      <Counter />
      <hr />
      <BackgroundToggler />
      <hr />
      <MessageToggler />
      <hr />
      <TextColorToggler />
      <hr />
      <FruitSelector />
    </main>
  );
}
