import { useState } from "react";
import Header_page from "../components/Header_page";
import "./style.css";
import axios from "axios";
import "mdb-ui-kit/css/mdb.min.css";
import Footer_page from "../components/Footer_page";

const Register = ({ categories}) => {
  const userInfos = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
  };
  const [user, setUser] = useState(userInfos);
  const { firstname, lastname, email, phoneNumber, password ,username} = user;
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const registerSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `http://localhost:8080/api/users`,
        {
          username,
          firstname,
          lastname,
          email,
          phoneNumber,
          password,
        },
        config
      );
      setError("");
      // setSuccess(data.message);
      const { message, ...rest } = data;
    } catch (error) {
      // setLoading(false);
      // setSuccess("");
      setError(error.response.data.message);
    }
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
      <div
        style={{ background: "#FFFFFF", margin: "10px", padding: " 5px 20px" }}
      >
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              id="tab-login"
              data-mdb-pill-init
              href="#pills-login"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
            >
              Người dùng
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="tab-register"
              data-mdb-pill-init
              href="#pills-register"
              role="tab"
              aria-controls="pills-register"
              aria-selected="false"
            >
              Người bán
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div
            class="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
            onSubmit={() => {registerSubmit()}}
          >
            <form style={{ width: "430px" }}>
              <div class="text-center mb-3">
                <p>Đăng ký với:</p>
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

              <p class="text-center">hoặc:</p>

              <div class="row mb-4">
                <div class="col">
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      type="text"
                      id="lastname"
                      class="form-control"
                      name="lastname"
                      onChange={handleRegisterChange}
                    />
                    <label class="form-label" for="lastname">
                      Họ
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      type="text"
                      id="firstname"
                      class="form-control"
                      name="firstname"
                      onChange={handleRegisterChange}
                    />
                    <label class="form-label" for="firstname">
                      Tên
                    </label>
                  </div>
                </div>
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <input
                  type="text"
                  id="registerUsername"
                  class="form-control"
                  name="username"
                  onChange={handleRegisterChange}
                />
                <label class="form-label" for="registerUsername">
                  Tên đăng nhập
                </label>
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <input
                  type="email"
                  id="registerEmail"
                  class="form-control"
                  name="email"
                  onChange={handleRegisterChange}
                />
                <label class="form-label" for="registerEmail">
                  Email
                </label>
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <input
                  type="text"
                  id="registerPhoneNumber"
                  class="form-control"
                  name="phoneNumber"
                  onChange={handleRegisterChange}
                />
                <label class="form-label" for="registerPhoneNumber">
                  Số điện thoại
                </label>
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <input
                  type="password"
                  id="registerPassword"
                  class="form-control"
                  name="password"
                  onChange={handleRegisterChange}
                />
                <label class="form-label" for="registerPassword">
                  Mật khẩu
                </label>
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <input
                  type="password"
                  id="registerRepeatPassword"
                  class="form-control"
                />
                <label class="form-label" for="registerRepeatPassword">
                  Xác nhận mật khẩu
                </label>
              </div>

              <div class="form-check d-flex justify-content-center mb-4">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="registerCheck"
                  aria-describedby="registerCheckHelpText"
                />
                <label class="form-check-label" for="registerCheck">
                  <p>Tôi đã đọc và đồng ý với&nbsp;</p>
                </label>
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  các điều khoản.
                </a>
              </div>

              <button
                data-mdb-ripple-init
                type="submit"
                class="btn btn-primary btn-block mb-3"
              >
                Đăng ký
              </button>
            </form>
          </div>
          <div
            class="tab-pane fade"
            id="pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
          >
            <form style={{ width: "430px" }}>
              <div class="text-center mb-3">
                <p>Đăng ký với:</p>
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

              <p class="text-center">hoặc:</p>

              <div class="row mb-4">
                <div class="col">
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="text" id="firstName" class="form-control" />
                    <label class="form-label" for="firstName">
                      Họ
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="text" id="lastName" class="form-control" />
                    <label class="form-label" for="lastName">
                      Tên
                    </label>
                  </div>
                </div>
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="registerUsername" class="form-control" />
                <label class="form-label" for="registerUsername">
                  Tên đăng nhập
                </label>
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="registerEmail" class="form-control" />
                <label class="form-label" for="registerEmail">
                  Email
                </label>
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <input
                  type="text"
                  id="registerPhoneNumber"
                  class="form-control"
                />
                <label class="form-label" for="registerPhoneNumber">
                  Số điện thoại
                </label>
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <input
                  type="password"
                  id="registerPassword"
                  class="form-control"
                />
                <label class="form-label" for="registerPassword">
                  Mật khẩu
                </label>
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <input
                  type="password"
                  id="registerRepeatPassword"
                  class="form-control"
                />
                <label class="form-label" for="registerRepeatPassword">
                  Xác nhận mật khẩu
                </label>
              </div>

              <div class="form-check d-flex justify-content-center mb-4">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="registerCheck"
                  aria-describedby="registerCheckHelpText"
                />
                <label class="form-check-label" for="registerCheck">
                  <p>Tôi đã đọc và đồng ý với&nbsp;</p>
                </label>
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  các điều khoản.
                </a>
              </div>

              <button
                data-mdb-ripple-init
                class="btn btn-primary btn-block mb-3"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer_page/>
    </div>
  );
};

export default Register;
