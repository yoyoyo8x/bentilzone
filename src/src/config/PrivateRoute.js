import { Navigate } from "react-router-dom";
import { useAuthValue } from "../components/Context/AuthProvider";

const PrivateRoute = ({ Component }) => {
  const { currentUser } = useAuthValue();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user[0]?.email);

  return (currentUser && user[0]?.email == "") ||
    (currentUser == null && user[0]?.email != "") ? (
    <Component />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
