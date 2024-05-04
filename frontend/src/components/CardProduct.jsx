import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
const CardProduct = ({ product }) => {
  const formattedPrice = product.price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return (
    <Card style={{marginBottom:"10px" , width:"240px"}}>
      <div
        style={{
          width: "15rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card.Img
          variant="top"
          src={product.imageUrl}
          style={{ maxHeight: "190px", maxWidth: "190px", margin: "10px" }}
        />
      </div>
      <Card.Body>
        <Card.Title>
          <a href={`/products/${product.id}`} className="name_book" style={{ textDecoration: "none"}}>
            {product.name}
          </a>
        </Card.Title>
        <Card.Text style={{fontWeight: "200" , fontSize:"13px" }}>
          Số lượng còn: {product.count}
        </Card.Text>
        <Card.Text style={{ color: "red", fontWeight: "750" , fontSize:"18px" }}>
          {formattedPrice}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
