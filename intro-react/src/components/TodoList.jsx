import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import List from "./List";

function TodoList(){
   const [todo, setTodo] = useState("")
   const [todos, setTodos] = useState([])
   const [isEditing, setIsEditing] = useState(false)
   const [currentTodo, setCurrentTodo] = useState(null)

   const todoValue = (e)=>{
     setTodo(e.target.value)
   }

    const addTodo =(e)=>{
    e.preventDefault()
    if(isEditing){
        updateTodo()
    }
    else{
        setTodos([...todos, todo])
        setTodo("")
        console.log(todos);
    }
   }
    const deleteTodo = (idx)=>{
        setTodos(todos.filter(( _,idxx)=> idxx !== idx))
    }
    const EditTodo = (todo , idx)=>{
        setIsEditing(true)
        setCurrentTodo(idx)
        setTodo(todo)
    }
    const updateTodo = (e)=>{
        e.preventDefault();
        const updatedTodo = [...todos]
        updatedTodo[currentTodo] = todo
        setTodos(updatedTodo)
        setIsEditing(false)
        setCurrentTodo(null)
        setTodo("");
    }
    return(
        <div>
           <Header></Header>
           <Form todo={todo} todoValue={todoValue}  AddTodo={addTodo} MyTodos={todos} updateTodo={updateTodo} MyEdit={isEditing} />
           <List todoValue={todoValue} MyTodos={todos} deleteTodo={deleteTodo} EditTodo ={EditTodo}/>
        </div>
    )
}
export default TodoList;