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
import Login from "./screens/Login";
import Register from "./screens/Register";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import UserList from "./componets/admin/UserList";
// import { FaBeer } from 'reac-icons/fa';
function App() {
  return (
    <>
      <BrowserRouter>
      <TopNav/>
        <Navbar/>
        <AdminScreen/>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/policy" element={<Policy/>}/>
          <Route path="/cart" element={<CartScreen/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/order" element={<OrderScreen/>}/>
          <Route path="/admin/*" element={<AdminScreen/>}/>
          {/* <Route path="/admin/userlist" element={<UserList/>}/> */}
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
