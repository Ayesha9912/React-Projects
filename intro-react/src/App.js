// import React from "react";

// class App extends React.Component {

//   // Two Types Of Components

//   // 1. Functional Component
//   // Stateless Component 
//   // state basically is a built-in object which is not avaiable in functional components
//   // Hooks ( useState, useEffect, useContext, useMemo, useCallBack, useRef, useReducer )
//   // No Built-in Props

//   // 2. Class Component
//   // Stateful Component
//   // For Updating the State we use setState() method.
//   // Lifecycle Methods(componentDidMount, componentDidUpdate, componentWillUnmount )
//   // Refs (useRef)
//   // Built-in Props(prop drilling)
//   // No Hooks












//   // Build Time
//   // Run Time Environment
//   // Run Time

//   // Virtual DOM
//   // Real / Actual DOM

//   // reconcicialtion ( Difference Between Current and Pre Virtual DOMs )
//   // Diff ( Difference between efficiency of updating the actual DOM. )



//   // state = {
//   //   count: 0,
//   //   name: "Ali"
//   // }

//   // Increment = ()=> {

//   //   if( this.state.count > 5 ){
//   //     this.setState({
//   //       name: "Javad"
//   //     })
//   //   }
//   //   else {
//   //     this.setState(
//   //       {
//   //         count: this.state.count + 1,
//   //         name: "Rehman"
//   //       }
//   //     )

//   //   }

//   // }

import React from "react";

class App extends React.Component {
  state = {
    todo: "",
    todoArr: [],
    isEditing: false,
    currentTodoIndex: null,
  };

  handleInp = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };

  addTodo = (e) => {
    e.preventDefault();
    if (this.state.isEditing) {
      this.updateTodo();
    } else {
      this.setState({
        todoArr: [...this.state.todoArr, this.state.todo],
        todo: "",
      });
    }
  };
  deleteTodo = (idx) =>{
    this.setState({
      todoArr: this.state.todoArr.filter((_, idxx) => idxx !== idx),
    });
  };
  editTodo = (todo, idx) =>{
    this.setState({
      todo: todo,
      isEditing: true,
      currentTodoIndex: idx,
    });
  };
  updateTodo = () =>{
    const updatedTodos = [...this.state.todoArr];
    updatedTodos[this.state.currentTodoIndex] = this.state.todo;
    this.setState({
      todoArr: updatedTodos,
      todo: "",
      isEditing: false,
      currentTodoIndex: null,
    });
  };
  render() {
    return (
      <div>
        <div className="todo-app">
          <div className="header">
            <h1>Todo List</h1>
          </div>
          <form className="form" onSubmit={this.addTodo}>
            <input
              type="text"
              placeholder="Add a todo"
              value={this.state.todo}
              onChange={this.handleInp}
            />
            <button type="submit">
              {this.state.isEditing ? "Update Todo" : "Add Todo"}
            </button>
          </form>
          <ul className="todo-list">
            {this.state.todoArr.map((todo, index) =>{
              return (
                <li className="list" key={index}>
                  {todo}
                  <button onClick={() => this.editTodo(todo, index)}>Edit</button>
                  <button onClick={() => this.deleteTodo(index)}>Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;

// import React from "react";
// import "./App.css";

// class App extends React.Component{
//    state = {
//     count: 0,
//     name: "Ayesha"
//   }

//   Increment = ()=>{
//     this.setState({
//       count: this.state.count+1
//     })

//     if(this.state.count > 5){
//       this.setState({
//         name: "Faisal"
//       })
//     }
//     else{
//       this.setState({
//         name: "Ayesha"
//       })
//     }
//   }

//   render (){
//     return(
//       <div>
//         <h1>InnerHTML:{this.state.count}</h1>
//         <button onClick={this.Increment}>Click</button>
//         <p>Name: {this.state.name}</p>

//       </div>
//     )
//   }
  
    
// }


// export default App