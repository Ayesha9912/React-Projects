function List({MyTodos , deleteTodo , EditTodo}){
    return(
        <div>
            <ul>
                {MyTodos.map((todo , index)=>{
                    return(
                        <li key={index}>
                            <span>{todo}</span>
                            <button onClick={()=> EditTodo(todo, index)} className="btn">Edit</button>
                            <button onClick={()=> deleteTodo(index)} className="btn">Delete</button> 
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default List