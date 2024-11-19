import React from "react";

function List({TodoArr , DeleteTodo, EditTodo}){
    return(
        <div>
            <ul>
            {TodoArr.map((todo , index)=>{
                return(
                    <li key={index}>{todo}
                    <button className="btn1" onClick={()=> EditTodo(todo , index) }>Edit</button>
                    <button className="btn2" onClick={()=>DeleteTodo(index)}>Delete</button>
                    </li>
                )
            })}

            </ul>
        </div>
    )
}

export default List 