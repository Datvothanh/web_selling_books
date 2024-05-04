import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Carousels() {
  return (
    <div style={{margin:"20px 0px", width:" 1350px"}}>
      <Container>
        <Row xs={3} md={4} lg={6}>
          <Col style={{ width: "748px", height: "300px" }}>
            {" "}
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn0.fahasa.com/media/magentothem/banner7/DaiLeT424_Slide_840x320.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn0.fahasa.com/media/magentothem/banner7/Tuan1_mainbanner_Slidebanner_840x320.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn0.fahasa.com/media/magentothem/banner7/MinhLongDiamond_0524_Slide_840x320.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col style={{ width: "280px" }}>
            <div>
              <img
                width={276}
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-04-2024/Zenbook_0424_BannerSocial_1080x1080PNG.png"
              />
            </div>
          </Col>
          <Col style={{ width: "280px" }}>
            <div>
              <img
                width={276}
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-04-2024/Zenbook_0424_BannerSocial_1080x1080PNG.png"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Carousels;
