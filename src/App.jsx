import "./App.css";
import About from "./componets/About";
import Contact from "./componets/Contact";
import TopNav from "./componets/TopNav";
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Policy from "./componets/Policy";
import Navbar from "./componets/Navbar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import "react-icons"
// import { FaBeer } from 'reac-icons/fa';
function App() {
  return (
    <>
      <BrowserRouter>
      <TopNav/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/policy" element={<Policy/>}/>
          <Route path="/cart" element={<CartScreen/>}/>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
