import { useState } from "react";

const Color = () => {
  const [color, setColor] = useState();

  const changeColorValue = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected color:{color}</p>
      </div>
      <label>Select a color:</label>
      <input type="color" value={color} onChange={changeColorValue} />
    </div>
  );
};

export default Color;
