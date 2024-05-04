import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "./pages/Login";

export default function LoggedInRoutes({}) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return userInfo ? <Outlet /> : <Login />;
}
