import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { useUserContext } from "../ctx/UserContext"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ToDoItem = () => {
  const [ toDoItem, setToDoItem ] = useState({ item: "" })
  const [ formMessage, setFormMessage ] = useState({ type: "", msg: "" })
  const { currUser } = useUserContext()
  const { id } = useParams()
  
  const handleInputChange = (e) => {
    setFormMessage({ type: "", msg: "" })
    setToDoItem({...toDoItem, item: e.target.value})
  }

  // if the id is anything but 0, query for that item via the api. 0 means it's a new ToDo being created.
  const lookupToDo = async () => {
    try {
      const resp = await fetch(`/api/todo/${id}`)
      const result = await resp.json()
      if( result.status === "success" ){
        setToDoItem(result.payload)
      }
    } catch(err){
      console.log(err.message)
    }
  }

  const saveToDo = async(e) => {
    e.preventDefault()
    if( !toDoItem.item.trim().length ) return setFormMessage({ type: "danger", msg: "Please provide an item first!" })
    const method = (id == "0") ? "POST" : "PUT"
    const path = (id == "0") ? `/api/todo/user/${currUser.data._id}` : `/api/todo/${id}`
    try {
      const resp = await fetch(path, {
        method: method, 
        body: JSON.stringify(toDoItem),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const result = await resp.json() 
      if( result.status === "success" ){
        setFormMessage({ type: "success", msg: "Changes saved successfully!" })
      }
    } catch(err){
      setFormMessage({ type: "danger", msg: "There was an error attempting to save this item." })
    }
  }

  useEffect(() => {
    if( id && id != "0" ){
      lookupToDo()
    }
  }, [id])

  if( currUser.status === "searching" ) return <></>
  return (
    <>
      <h1>Home Page</h1>

      { currUser.status === "notfound" ? (
        <p>You must be logged in to work with any ToDo items.</p>
      ) : (
        <>
          <Form onSubmit={saveToDo}>
            <Form.Group className="mb-3" controlId="toDoForm.toDoItem">
              <Form.Label>Enter your ToDo here</Form.Label>
              <Form.Control 
                as="textarea" 
                name="item" 
                value={toDoItem.item} 
                onChange={handleInputChange} 
                rows={3} 
              />
            </Form.Group>

            <Button variant="primary" type="submit">Save Changes</Button>
          </Form>

          { formMessage.type.length > 0 && formMessage.msg.length > 0 && (
            <div className={`mt-3 alert alert-${formMessage.type}`} role="alert">
              { formMessage.msg }
            </div>
          )}
        </>
      )}
    </>
  )
}

export default ToDoItem