import React from "react";
import "./App.css";
import User from "./User"

 ////this is class component
class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello world</h1>
        <p>This is New React App</p>
        <h1 className="h2">Hello React</h1>
        <User/>
      </div>
    )
  }
}
export default App


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;
