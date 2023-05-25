import { Navigate } from "react-router-dom";
import { useAuthValue } from "../components/Context/AuthProvider";

const PrivateRoute = ({ Component }) => {
  const { currentUser } = useAuthValue();

  return currentUser ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
