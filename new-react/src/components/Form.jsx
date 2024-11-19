import React from "react";

function Form({AddTodo , Todo , TodoValue , MainEdit , UpdateTodo}){
    return(
        <div>
            <form onSubmit={MainEdit ? UpdateTodo : AddTodo}>
            <input type="text" placeholder="Add Todo" onChange={TodoValue} value={Todo}/>
            <button onClick={AddTodo}>{
                MainEdit ? "Update Todo" : "Add To do"

            }</button>
            </form>
            
        </div>
    )
}

export default Form