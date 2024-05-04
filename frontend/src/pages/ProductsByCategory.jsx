import CardProduct from "../components/CardProduct";
import { useEffect, useRef, useReducer, useState } from "react";
import Header_page from "../components/Header_page";
import { HashLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousels from "../components/Carousels";
import "./style.css";
import Footer_page from "../components/Footer_page";
import { productsReducer } from "../functions/reducers";
const ProductsByCategory = ({ categories }) => {
  const { id } = useParams();

  const [loadingAllProduct, setLoadingAllProduct] = useState(false);
  const [{ loading, error, products }, dispatch] = useReducer(productsReducer, {
    loading: false,
    products: [],
    error: "",
  });
  const [filteredItems, setFilteredItems] = useState(products);
  const getAllProductByCategory = async () => {
    try {
      setLoadingAllProduct(true);
      dispatch({
        type: "PRODUCTS_REQUEST",
      });
      const { data } = await axios.get(
        `http://localhost:8080/api/products/category/${id}`
      );
      dispatch({
        type: "PRODUCTS_SUCCESS",
        payload: data.result,
      });
      setFilteredItems(data.result);
      setLoadingAllProduct(false);
    } catch (error) {
      dispatch({
        type: "PRODUCTS_ERROR",
        payload: "ERROR",
      });
    }
  };
  useEffect(() => {
    getAllProductByCategory();
  }, []);

  function handleFilterClick(minPrice, maxPrice) {
    if (minPrice >= maxPrice) {
      console.error("Invalid price range");
      return;
    }

    const filteredProducts = products.filter((product) => {
      return product.price >= minPrice && product.price <= maxPrice;
    });

    if (filteredProducts.length === 0) {
      console.warn("No products match the selected price range");
    }

    setFilteredItems(filteredProducts);
  }
  function handleFilterClickCompany(company) {
    const filteredProducts = products.filter((product) => {
      return product.publishingCompany === company;
    });

    if (filteredProducts.length === 0) {
      console.warn("No products match the selected price range");
    }

    setFilteredItems(filteredProducts);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#F0F2F5",
        overflowX: "hidden",
      }}
    >
      <Header_page categories={categories} />
      <div className="row" style={{ margin: "20px 0px", width: " 1350px" }}>
        <div class="col-md-4" >
          <ul class="list-group" style={{marginBottom:"10px"}}>
            <li class="list-group-item">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault0"
                  onClick={() => setFilteredItems(products)}
                />
                <label class="form-check-label" for="flexRadioDefault0">
                  Tất cả
                </label>
              </div>
            </li>
          </ul>
          <ul class="list-group">
            <li class="list-group-item">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onClick={() => handleFilterClick(0, 150000)}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  0đ - 150,000đ
                </label>
              </div>
            </li>
            <li class="list-group-item">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  onClick={() => handleFilterClick(150000, 300000)}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  150,000đ - 300,000đ
                </label>
              </div>
            </li>
            <li class="list-group-item">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  onClick={() => handleFilterClick(300000, 500000)}
                />
                <label class="form-check-label" for="flexRadioDefault3">
                  300,000đ - 500,000đ
                </label>
              </div>
            </li>
            <li class="list-group-item">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                  onClick={() => handleFilterClick(500000, 700000)}
                />
                <label class="form-check-label" for="flexRadioDefault4">
                  500,000đ - 700,000đ
                </label>
              </div>
            </li>
            <li class="list-group-item">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault5"
                  onClick={() => handleFilterClick(700000, 99999999999)}
                />
                <label class="form-check-label" for="flexRadioDefault5">
                  700,000đ - Trở lên
                </label>
              </div>
            </li>
          </ul>
          <ul class="list-group" style={{ marginTop: "10px" }}>
            <li class="list-group-item">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault6"
                  onClick={() => handleFilterClickCompany("NXB Kim Đồng")}
                />
                <label class="form-check-label" for="flexRadioDefault6">
                  NXB Kim Đồng
                </label>
              </div>
            </li>
            <li class="list-group-item">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault7"
                  onClick={() => handleFilterClickCompany("NXB Hội Nhà Văn")}
                />
                <label class="form-check-label" for="flexRadioDefault7">
                  NXB Hội Nhà Văn
                </label>
              </div>
            </li>
            <li class="list-group-item">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault8"
                  onClick={() => handleFilterClickCompany("Alpha Books")}
                />
                <label class="form-check-label" for="flexRadioDefault8">
                  Alpha Books
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-8">
          {loadingAllProduct ? (
            <div
              className="sekelton_loader"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <HashLoader color="#1876f2" />
            </div>
          ) : products.length === 0 ? (
            <>
              {" "}
              <div className="No_results" style={{ paddingTop: "40px" }}>
                <p>No products to show</p>
              </div>
            </>
          ) : (
            <Row xs={1} md={3}>
              {filteredItems.map((filteredItem, i) => (
                <Col key={i}>
                  <CardProduct product={filteredItem} />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </div>
      <Footer_page />
    </div>
  );
};

export default ProductsByCategory;
