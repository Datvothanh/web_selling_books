import { useState, useEffect } from "react";
import axios from "axios";
import Header_page from "../components/Header_page";
import Footer_page from "../components/Footer_page";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../redux/action/userActions";
import { useNavigate } from "react-router-dom";
const Login = ({ categories}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/")
    }
  }, [userInfo, navigate]);

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };
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
      <div style={{ background: "#FFFFFF", margin: "20px", padding: "20px" }}>
        <form style={{ width: "430px" }} onSubmit={loginSubmit}>
          <div data-mdb-input-init class="form-outline mb-4">
            <input
              type="text"
              id="username"
              class="form-control"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label class="form-label" for="username">
              Tên đăng nhập
            </label>
          </div>

          <div data-mdb-input-init class="form-outline mb-4">
            <input
              type="password"
              id="password"
              class="form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label class="form-label" for="password">
              Mật khẩu
            </label>
          </div>

          <div class="row mb-4">
            <div class="col">
              <a href="#!">Quên mật khẩu?</a>
            </div>
          </div>

          <button
            data-mdb-ripple-init
            type="submit"
            class="btn btn-primary btn-block mb-4"
          >
            Đăng nhập
          </button>

          <div class="text-center">
            <p>
              Không phải là thành viên? <a href="register">Đăng ký</a>
            </p>
            <p>Hoặc đăng ký với:</p>
            <button
              data-mdb-ripple-init
              type="button"
              class="btn btn-secondary btn-floating mx-1"
            >
              <i class="fab fa-facebook-f"></i>
            </button>

            <button
              data-mdb-ripple-init
              type="button"
              class="btn btn-secondary btn-floating mx-1"
            >
              <i class="fab fa-google"></i>
            </button>

            <button
              data-mdb-ripple-init
              type="button"
              class="btn btn-secondary btn-floating mx-1"
            >
              <i class="fab fa-twitter"></i>
            </button>

            <button
              data-mdb-ripple-init
              type="button"
              class="btn btn-secondary btn-floating mx-1"
            >
              <i class="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>

      <Footer_page />
    </div>
  );
};

export default Login;
