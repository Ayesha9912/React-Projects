import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// function App(){
//   const [value, setValue] = useState(0);
//   const [data, setData] = useState([]);

//   const handleOnFetch =async()=>{
//     let Data = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     let response = await Data.json();
//     // console.log(response);
//     setData(response);
//     // setData(response)
//   }
//   useEffect(() => { 
//     handleOnFetch();
//   } , []);
//   return (
//    <div className="App">
//       <button > - </button>
//       <div>{value}</div>
//       <button onClick={()=>setValue(value+1)} > + </button>
//     <div>{data ? data[0] : ""}
//     {console.log(data[0])}
//   </div>
//    </div>
//   );
// }

  ///First we need to learn the basic concept of life cycle of components 
// there are three stages of lifecycle of components 

//1- initialization(when we initialize or write anything on comp)
//2- mounting (when component appear on the screen)
//3- updating (when some function made changes)
//4- unmounting (when we open some other page or it get dissappear from the screen)


//why it is important ??
 // some task are depend on lifecycle of component like if user fetch some data or change some things on table
 // we also need to change it on database if user move to another page the i have to clear the previus page like unmounting
   

//useEffect :  when we have to perform some task in life cycle of componnet

// useEffect( ()=>{

// }, [])

// it consist of two parameters
//1- call back function
//2- dependency array
//let's practice

useEffect ( ()=>{
  console.log("user mounted"); //no dependency here
  //now to track unmounting we will do this
  return function (){
     console.log("user unmount");
  }
}, [])

//empty dep array means => whole component

useEffect( ()=>{
  console.log("it will run when counter is updates");// we can use multiple dependency here

  // we can take return function here to track the previous update rendering

  return function (){
    console.log("user previous update");
  }

},[counter])



  




export default App;
