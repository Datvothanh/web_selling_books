import axios from "axios";
import { useEffect, useRef, useReducer, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { productsReducer } from "./functions/reducers";
import "./icons/icons.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { MDBBtn } from "mdb-react-ui-kit";
import { Input, Tab, Ripple, initMDB } from "mdb-ui-kit";
import ProductsByCategory from "./pages/ProductsByCategory";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import PrivateRouter from "./LoggedInRoutes";
import Profile from "./pages/Profile";
import LoggedInRoutes from "./LoggedInRoutes";

function App() {
  const [loadingAllProduct, setLoadingAllProduct] = useState(false);
  const [categories, setCategories] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(productsReducer, {
    loading: false,
    products: [],
    error: "",
  });

  useEffect(() => {
    initMDB({ Input, Tab, Ripple });
    getAllProduct();
    getCategory();
  }, []);

  const getCategory = async () => {
    const { data } = await axios.get(`http://localhost:8080/api/categories`);
    setCategories(data.result);
  };

  const getAllProduct = async () => {
    try {
      setLoadingAllProduct(true);
      dispatch({
        type: "PRODUCTS_REQUEST",
      });
      const { data } = await axios.get(`http://localhost:8080/api/products`);
      dispatch({
        type: "PRODUCTS_SUCCESS",
        payload: data.result,
      });
      setLoadingAllProduct(false);
    } catch (error) {
      dispatch({
        type: "PRODUCTS_ERROR",
        payload: "ERROR",
      });
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                loadingAllProduct={loadingAllProduct}
                categories={categories}
              />
            }
            exact
          />
          <Route
            path="/products/category/:id"
            element={<ProductsByCategory categories={categories} />}
            exact
          />
          <Route
            path="/products/:id"
            element={<SingleProduct categories={categories} />}
            exact
          />
          <Route
            path="/cart"
            element={<Cart categories={categories} />}
            exact
          />
          <Route
            path="/login"
            element={<Login categories={categories} />}
            exact
          />
          <Route
            path="/register"
            element={<Register categories={categories} />}
            exact
          />
          <Route element={<LoggedInRoutes/>}>
            <Route
              path="/profile"
              element={<Profile categories={categories} />}
              exact
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
