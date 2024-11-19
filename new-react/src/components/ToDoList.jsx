import React, { useState } from "react";
import Header from "./Header"
import Form from "./Form";
import List from "./List";



function ToDoList(){


    const [Todo , setTodo] = useState("")
    const [TodoArr , setTodoArr] = useState([])
    const [isEditing , setIsEditing] = useState(false)
    const [CurrentTodo , setCurrentTodo] = useState(null)

    const TodoValue = (e)=>{
        e.preventDefault()
        setTodo(e.target.value)
    }
    const AddTodo = (e)=>{
    e.preventDefault();
        if(isEditing){
            UpdateTodo(e) 
        }
        else{
            setTodoArr([...TodoArr , Todo])
            setTodo("")
            console.log(TodoArr);
        }
    }

    const DeleteTodo = (idx)=>{
        setTodoArr(TodoArr.filter((_, idxx)=> idxx !== idx))
    }

    const EditTodo = (todo , idx)=>{
            setIsEditing(true)
            setCurrentTodo(idx)
            setTodo(todo)
    }
    const UpdateTodo = (e)=>{
        e.preventDefault();
        const UpdatedTodo = [...TodoArr]
        UpdatedTodo[CurrentTodo] = Todo
        setTodoArr(UpdatedTodo)
        setIsEditing(false)
        setCurrentTodo(null)
        setTodo("")
    }
    return(
        <div className="container">
            <Header></Header>
            <Form AddTodo = {AddTodo} Todo = {Todo} TodoValue = {TodoValue} MainEdit = {isEditing} UpdateTodo = {UpdateTodo}/>
            <List TodoArr = {TodoArr} DeleteTodo = {DeleteTodo} EditTodo = {EditTodo}/>
        </div>
    )
}

export default ToDoList