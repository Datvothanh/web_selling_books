import React, { useEffect, useState } from "react";
import axios from "axios";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Message from "../LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../LoadingError/Loading";

import moment from "moment";
import Header_page from "../components/Header_page";

const SingleProduct = ({ categories }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const getDetailProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8080/api/products/${id}`
      );
      setLoading(false);
      setProduct(data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getDetailProduct();
  }, [id]);

  const formattedPrice = product?.price?.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

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
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div
              className="row"
              style={{
                marginTop: "20px",
                padding: "10px",
                background: "#FFFFFF",
              }}
            >
              <div
                className="col-md-6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="single-image">
                  <img
                    src={product?.imageUrl}
                    alt={product?.name}
                    height={388}
                    width={388}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="name_book_detail">{product?.name}</div>
                  </div>
                  <p className="text_des">{product?.des}</p>

                  <div className="product-count col-lg-7 ">
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Giá:</h6>
                      <span>{formattedPrice}</span>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Tình trạng:</h6>
                      {product?.count > 0 ? (
                        <span>Còn hàng</span>
                      ) : (
                        <span>Hết hàng</span>
                      )}
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Nhà xuất bản:</h6>
                      {product?.publishingCompany}
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Đánh giá:</h6>
                      <Rating value={1} text={`${0} đánh giá`} />
                    </div>
                    {product?.count > 0 ? (
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Số lượng:</h6>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product?.count).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                        <button
                          type="button"
                          class="btn btn-outline-danger"
                          data-mdb-ripple-init
                          data-mdb-ripple-color="dark"
                          style={{ marginTop: "25px" }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <h5 style={{ paddingRight: "5px" }}>
                              {" "}
                              <i class="bi bi-cart3"></i>
                            </h5>{" "}
                            <div>Thêm vào giỏ hàng</div>
                          </div>
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            {/* RATING */}
            <div
              className="row my-4"
              style={{
                // margin: "20px 0px",
                padding: "10px",
                background: "#FFFFFF",
              }}
            >
              <div className="col-md-6">
                <h6 className="mb-3">Các nhận xét:</h6>
                {product?.reviews?.length === 0 && (
                  <Message variant={"alert-info mt-3"}>
                    Không có nhận xét nào!
                  </Message>
                )}
                {product?.reviews?.map((review) => (
                  <div
                    key={review?._id}
                    className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded"
                  >
                    <strong>{review?.name}</strong>
                    <Rating value={review?.rating} />
                    <span>{moment(review?.createdAt).calendar()}</span>
                    <div className="alert alert-info mt-3">
                      {review?.comment}
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                <h6>Viết một nhận xét về sản phẩm</h6>
                <div className="my-4">
                  {/* {loadingCreateReview && <Loading />} */}
                  {/* {errorCreateReview && (
                    <Message variant="alert-danger">
                      {errorCreateReview}
                    </Message>
                  )} */}
                </div>
                {userInfo ? (
                  <form>
                    <div className="my-4">
                      <strong>Đánh giá</strong>
                      <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      >
                        <option value="">Chọn đánh giá</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                      </select>
                    </div>
                    <div className="my-4">
                      <strong>Nhận xét</strong>
                      <textarea
                        row="3"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <button
                        // disabled={loadingCreateReview}
                        className="col-12 bg-black border-0 p-3 rounded text-white"
                      >
                        Gửi
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="my-3">
                    <Message variant={"alert-warning"}>
                      Please{" "}
                      <Link to="/login">
                        " <strong>Login</strong> "
                      </Link>{" "}
                      to write a review{" "}
                    </Message>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
