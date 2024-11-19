import './App.css';
import {useState} from 'react';

function App() {
  const [name, setname] = useState("")
  const [chat, setchat] = useState([]);
  const [msg, setMsg] = useState("");

  const sendchat = ()=>{
    // setchat([...chat, {name:name, message:msg}]);
    const c = [...chat]
    c.push({name, message:msg});
    setchat(c);
    setMsg("");
  }
  return(
    <div>
      {name ? null: <div>
        <input type='text'  placeholder='Enter name to start a chat' onBlur={e=>setname(e.target.value)}></input>
      </div>}
      {name ? <div>
      <h1>User:{name}</h1>
      <div className='chat-container'>
        {chat.map(c=><div className={`container ${c.name === name ? 'me': ''}`}>
        <p className='chatbox'>
          <strong>{c.name}: </strong>
          <span>{c.message}</span>
        </p>
        </div>)}
      </div>
      <div className='btm'>
      <input type='text' onInput={e=>setMsg(e.target.value)} value={msg} placeholder='enter your chat'></input>
      <button onClick={e=> sendchat()}>send</button>
      </div>
      </div>: null}
    </div>
  );
}
export default App;
