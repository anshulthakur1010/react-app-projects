import { useState } from "react";

const Counter = () => {
  const [Count, setCount] = useState(0);

  const increment = () => {
    setCount(Count + 1);
  };

  const decrement = () => {
    setCount(Count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="countainer-container">
      <p className="counter-display">{Count}</p>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
