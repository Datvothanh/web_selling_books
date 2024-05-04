import CardProduct from "../components/CardProduct";
import Header_page from "../components/Header_page";
import { HashLoader } from "react-spinners";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousels from "../components/Carousels";
import "./style.css";
import Footer_page from "../components/Footer_page";
import Loading from "../LoadingError/Loading";

const Home = ({ products, loadingAllProduct, categories }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#F0F2F5",
        overflowX:"hidden"
      }}
    >
      <Header_page categories={categories} />
      <Carousels />
      <div
        className="home_middle" 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {loadingAllProduct ? (
          <div className="sekelton_loader">
            <Loading/>
          </div>
        ) : products.length === 0 ? (
          <>
            {" "}
            <div className="No_results" style={{ paddingTop: "40px" }}>
              <p>No products to show</p>
            </div>
          </>
        ) : (
          <Row xs={1} md={5}>
            {products.map((product, i) => (
              <Col key={i}>
                <CardProduct product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
      <Footer_page/>
    </div>
  );
};

export default Home;
