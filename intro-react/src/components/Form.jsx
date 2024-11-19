function Form({ todo, todoValue, AddTodo, updateTodo, MyEdit }) {
    return (
        <div>
            <form onSubmit={MyEdit ? updateTodo : AddTodo} >
                <input type="text" placeholder="Add a todo" value={todo} onChange={todoValue} />
                <button type="submit" >
                    {MyEdit ? "update Todo" : "Add Todo"}
                </button>
            </form>
        </div>
    )
}
export default Form;