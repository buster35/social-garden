import { useNavigate } from "react-router-dom";
import { useUserContext } from "../ctx/UserContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currUser } = useUserContext();
  console.log(currUser)
  const navigate = useNavigate();

  if (currUser.status === "found" ) {
    console.log(currUser.status)
    return <Component {...rest} />;
  } else {
    console.log("You need to log in")
    navigate("/login");
  }
};

export default ProtectedRoute;