import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useUserContext } from "../ctx/UserContext"

const HomePage = () => {
  const [ toDoList, setToDoList ] = useState([])
  const { currUser } = useUserContext()
  
  const checkForTodos = async () => {
    try {
      const resp = await fetch(`/api/todo/all/${currUser.data._id}`)
      const result = await resp.json()
      if( result.status === "success" ){
        setToDoList(result.payload)
      }
    } catch(err){
      console.log(err.message)
    }
  }

  useEffect(() => {
    checkForTodos()
  }, [currUser])

  if( currUser.status === "searching" ) return <></>
  return (
    <>
      <h1>Home Page</h1>

      { currUser.status === "notfound" ? (
        <p>You must be logged in to see your items.</p>
      ) : (
        <>
          { toDoList.length === 0 ? (
            <p>Sorry, no items available. You can <Link to="/todo/0">create one now</Link>.</p>
          ) : (
            <ul>
              { toDoList.map( todo => (
                <li key={todo._id}>
                  <Link to={`/todo/${todo._id}`}>
                    { todo.item }
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  )
}

export default HomePage