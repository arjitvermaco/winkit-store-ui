import Cart from "./Components/Cart";
import Header from "./Components/Header";
import HomeBanner from "./Components/HomeBanner";
import HomeCategories from "./Components/HomeCategories";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
    <Header/>
    <HomeBanner/>
    <HomeCategories/>
    <Cart/>
    <Login/>

    <Routes>

    </Routes>
   </>
  );
}

export default App;
