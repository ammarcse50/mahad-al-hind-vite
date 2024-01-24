import "./App.css";
import Books from "./components/Books/Books";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="w-full">
      <Header></Header>
      <Books></Books>
      <Courses></Courses>
        <Footer></Footer>
      
    </div>
  );
}

export default App;
