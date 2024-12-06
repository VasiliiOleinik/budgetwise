import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ element }) => {
  const token = Cookies.get("auth_token"); // Проверяем наличие токена
  console.log('document.cookie', document.cookie)
  console.log('token', token)
  
  return token ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;