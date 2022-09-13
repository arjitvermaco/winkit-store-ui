import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Login from "./Components/Login";
import HomePage from "./Pages/HomePage";
import CategoryPage from './Pages/CategoryPage';
import SingleCategoryPage from './Pages/SingleCategoryPage'
import ProductPage from "./Pages/ProductPage";
import CheckoutPage from "./Pages/CheckoutPage";
import AccountPage from "./Pages/AccountPage";
import {Toaster} from 'react-hot-toast'
import { useEffect } from "react";
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "./firebase";

function App() {

  useEffect(()=>{
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
      }, auth);
  },[])

  return (
    <>
   
      <Header />
      <Toaster/>
      <div id="recaptcha-container"></div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/category" element={<CategoryPage/>}>
          <Route path=":categoryId" element={<SingleCategoryPage/>} />
        </Route>

        <Route path="/product/:productId" element={<ProductPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/account" element={<AccountPage/>}/>


      </Routes>
      

      <Cart />
      <Login/>
    </>
  );
}

export default App;


