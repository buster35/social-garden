import { useUserContext } from "../ctx/UserContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currUser } = useUserContext();
  console.log(currUser)

  if (currUser.status === "found" ) {
    console.log(currUser.status)
    return <Component {...rest} />;
  } else {
    console.log("You need to log in")
    window.location.href = "/login"
  }
};

export default ProtectedRoute;