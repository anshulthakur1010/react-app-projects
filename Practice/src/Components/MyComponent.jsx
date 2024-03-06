import { useState } from "react";

const MyComponent = () => {
  const [car, setCar] = useState({
    year: 2024,
    model: "Mustang",
  });

  const handleYearChange = (event) => {
    setCar((c) => ({ ...c, year: event.target.value }));
  };

  const handleModelChange = (event) => {
    setCar((c) => ({ ...c, model: event.target.value }));
  };

  return (
    <div>
      <p>
        Your Favourite Car is:{car.year} {car.model}
      </p>

      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  );
};

export default MyComponent;
