import { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      myName: "Vinod",
      age: 25,
    },
    {
      id: 1,
      myName: "Ram",
      age: 27,
    },
  ];

  const [myArray, setmyArray] = useState(bioData);

  const clearArray = () => {
    setmyArray([]);
  };

  const removeElm = (id) => {
    const mynewArray = myArray.filter((curElement) => {
      return curElement.id === !id;
    });

    setmyArray(mynewArray);
  };

  return (
    <>
      {myArray.map((curElement) => (
        <h1 className="h1Style" key={curElement.id}>
          Name:{curElement.myName} & Age:{curElement.age}
          <button className="innerBtn" onClick={() => removeElm(curElement.id)}>
            Remove
          </button>
        </h1>
      ))}
      <button className="btn" onClick={clearArray}>
        Clear
      </button>
    </>
  );
};

export default UseStateArray;
