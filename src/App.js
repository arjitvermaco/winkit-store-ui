import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Login from "./Components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CategoryPage from "./Pages/CategoryPage";
import SingleCategoryPage from "./Pages/SingleCategoryPage";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <>
      <Header />
      <Cart />
      <Login />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />}>
          <Route path=":categoryId" element={<SingleCategoryPage/>}/>
         
        </Route>
        <Route path="/product/:productId" element={<ProductPage/>}/>
      </Routes>
    </>
  );
}

export default App;
