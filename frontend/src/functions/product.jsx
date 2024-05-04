import axios from "axios";

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/products`
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

