import { useState } from "react";

const UpdateArray = () => {
  const [foods, setFoods] = useState(["Banana", "Apple", "Mango"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  };

  const handleRemoveFood = (index) => {
    setFoods(foods.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>List Of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter Food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
};

export default UpdateArray;