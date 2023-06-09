import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState({ status: "searching", data: null });
  const [ready, setReady] = useState(false);

  const verifyUser = async () => {
    console.log("checking user");
    setCurrUser({ status: "searching", data: null });
    if (Cookies.get("auth-cookie")) {
      try {
        const query = await fetch("/api/user/verify", {
          method: "post",
          body: JSON.stringify({}),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await query.json();
        console.log(result);
        if (result && result.status === "success") {
          setCurrUser({ status: "found", data: result.payload });
        } else {
          setCurrUser({ status: "notfound" });
        }
        setReady(true);
      } catch (err) {
        setCurrUser({ status: "notfound", data: null });
        if (!window.location.href.includes("/login")) {
          window.location.href = "/login";
        }
      }
    } else {
      setCurrUser({ status: "notfound" });
      setReady(true);
    }
  };

  const logout = () => {
    Cookies.remove("auth-cookie");
    setCurrUser({ status: "searching", data: null });
    window.location.href = "/login";
  };

  useEffect(() => {
    verifyUser();
  }, [window.location.href]);

  if (!ready) return <></>;
  return (
    <UserContext.Provider value={{ currUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
