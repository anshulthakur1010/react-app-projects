import "./App.css";
import BasicForm from "./Components/BasicForm";
import BasicUseEffect from "./Components/BasicUseEffect";
import Color from "./Components/Color";
import Counter from "./Components/Counter";
import DigitalClock from "./Components/DigitalClock";
import MyComponent from "./Components/MyComponent";
import Props from "./Components/Props";
import ToDoList from "./Components/ToDoList";
import UpdateArray from "./Components/UpdateArray";
import UpdateCars from "./Components/UpdateCars";
import UseStateArray from "./Components/UseStateArray";
import UserGreetings from "./Components/UserGreetings";

// function App() {
//   const [myName, setmyName] = useState("HI ITS ME");

//   const changeName = () => {
//     let value = myName;

//     if (value === "HI ITS ME") {
//       setmyName("Anshul");
//     } else {
//       setmyName("HI ITS ME");
//     }
//   };

//   return (
//     <>
//       <div>
//         <h1>{myName}</h1>
//         <button className="btn" onClick={changeName}>
//           Click Me
//         </button>
//       </div>
//     </>
//   );
// }
// export default App;

function App() {
  return (
    <>
      {/* <UseStateArray></UseStateArray> */}
      {/* <BasicForm /> */}
      {/* <Props name="Anshul" age={21} isStudent={true} />
        <Props name="Vishal" /> */}
      {/* <UserGreetings isLoggedIn={true} username="Anshul" /> */}
      {/* <Counter /> */}
      {/* <Color /> */}
      {/* <MyComponent /> */}
      {/* <UpdateArray /> */}
      {/* <UpdateCars /> */}
      {/* <ToDoList /> */}
      {/* <BasicUseEffect /> */}
      <DigitalClock />
    </>
  );
}

export default App;
