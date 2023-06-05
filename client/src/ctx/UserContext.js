import { createContext, useContext, useState, useEffect } from "react" 
import Cookies from "js-cookie";

const UserContext = createContext({})
export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [ currUser, setCurrUser ] = useState({ status: "searching", data: null })

  const verifyUser = async() => {
    setCurrUser({ status: "searching", data: null })
    if( Cookies.get("auth-cookie") ){
      try {
        const query = await fetch("/api/user/verify", {
          method: "post",
          body: JSON.stringify({}),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const result = await query.json()
        if( result && result.status === "success" ){
          setCurrUser({ status: "found", data: result.payload })
        } else {
          setCurrUser({ status: "notfound" })
        }
      } catch(err){
        setCurrUser({ status: "notfound", data: null })
        if( !window.location.href.includes("/login") ){
          window.location.href = "/login"
        }
      }
    }
  }

  const logout = () => {
    Cookies.remove("auth-cookie");
    setCurrUser({ status: "searching", data: null })
    window.location.href = "/login"
  }

  useEffect(() => {
    verifyUser()
  }, [window.location.href])


  return (
    <UserContext.Provider value={{ currUser, logout }}>
      { children }
    </UserContext.Provider>
  )
}