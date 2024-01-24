import "./App.css";
import Books from "./components/Books/Books";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="">
     <Header></Header>
        <Books></Books>
      <div className="flex justify-center">
       
        <Courses></Courses>
      
      </div>  
      
      <Footer></Footer>
    </div>
  );
}

export default App;
