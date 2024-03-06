import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <WelcomeMessage></WelcomeMessage>
        <ToDoItems></ToDoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
