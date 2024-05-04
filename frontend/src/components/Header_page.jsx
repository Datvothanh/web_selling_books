import { useEffect, useRef, useReducer, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action/userActions";
import "./style.css";
const Header_page = ({ categories }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  
   
  const logoutHandler = () => {
    dispatch(logout(userInfo.token ));
  };

  return (
    <div className="header">
      <Navbar expand="lg" className="bg-body">
        <Container fluid style={{ padding: "0px 290px" }}>
          <Navbar.Brand href="/">
            <img
              src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
              style={{ width: "220px" }}
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                title={
                  <img
                    src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_menu.svg"
                    style={{ width: "36px", height: "36px" }}
                  ></img>
                }
                id="navbarScrollingDropdown"
              >
                <Row style={{ width: "max-content" }}>
                  {categories?.map((categorie, i) => (
                    <div style={{ width: "200px", margin: "5px" }} key={i}>
                      <div style={{ display: "flex" }}>
                        <h4>
                          <i class="bi bi-bookmark-star-fill"></i>
                        </h4>
                        <NavDropdown.Item
                          href={`/products/category/${categorie.id}`}
                        >
                          {categorie.name}
                        </NavDropdown.Item>
                      </div>

                      <p style={{ fontSize: "12px" }}>{categorie.des}</p>
                    </div>
                  ))}
                </Row>
              </NavDropdown>
            </Nav>
            <Form className="d-flex" style={{ padding: "0px 20px" }}>
              <Form.Control
                style={{ width: "500px" }}
                type="search"
                placeholder="Tìm kiếm"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="danger">
                <i class="bi bi-search"></i>
              </Button>
            </Form>
            <Nav.Link
              href="/cart"
              style={{ padding: "0px 30px", width: "120px" }}
            >
              <div>
                <h3 style={{ display: "flex", justifyContent: "center" }}>
                  <i class="bi bi-cart3"></i>
                </h3>
                <div className="top_menu_label">Giỏ hàng</div>
              </div>
            </Nav.Link>

            {userInfo ? (
              <NavDropdown
                title={
                  <div>
                    Hello,
                    {userInfo.lastname}
                    {userInfo.firstname}
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/profile">
                  Trang cá nhân
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  Đăng xuất
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown
                title={
                  <img
                    src="https://res.cloudinary.com/dii5yhoar/image/upload/v1714531957/Screenshot_2024-05-01_095145_csqqft.png"
                    style={{ width: "73px", height: "61px" }}
                  ></img>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/register">Đăng ký</NavDropdown.Item>
                <NavDropdown.Item href="/login">Đăng nhập</NavDropdown.Item>
              </NavDropdown>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header_page;
