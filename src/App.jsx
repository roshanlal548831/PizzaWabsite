import "./App.css";
import About from "./componets/About";
import Contact from "./componets/Contact";
import TopNav from "./componets/TopNav";
import {Routes,Route} from "react-router-dom"
import Policy from "./componets/Policy";
import Navbar from "./componets/Navbar";
import HomeScreen from "./screens/HomeScreen";
// import { FaBeer } from 'reac-icons/fa';
function App() {
  return (
    <>
      <TopNav/>
      <Navbar/>
     <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/policy" element={<Policy/>}/>
     </Routes>
    </>
  );
}

export default App;
