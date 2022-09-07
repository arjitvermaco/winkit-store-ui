import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Login from "./Components/Login";
import HomePage from "./Pages/HomePage";
import CategoryPage from './Pages/CategoryPage';
import SingleCategoryPage from './Pages/SingleCategoryPage'
import ProductPage from "./Pages/ProductPage";
import CheckoutPage from "./Pages/CheckoutPage";
import { useEffect } from "react";


function App() {
  return (
    <>
    <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/category" element={<CategoryPage/>}>
          <Route path=":categoryId" element={<SingleCategoryPage/>} />
        </Route>

        <Route path="/product/:productId" element={<ProductPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>

      </Routes>
      

      <Cart />
      <Login/>
    </>
  );
}

export default App;


function ScrollToTop({ history }) {

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

