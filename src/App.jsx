import "./App.css";
import Books from "./components/Books/Books";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="w-full">
      <Header></Header>
      <Books></Books>
      <Courses></Courses>
    </div>
  );
}

export default App;
