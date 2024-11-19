import React, { useState, useEffect } from 'react';
export function MultipleEffectsComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  // Effect for count
  useEffect(() =>{
    document.title = `Count: ${count}`;
    console.log("count", count);
  }, [count]);
  // Effect for name
  useEffect(() =>{
    console.log('Name has changed to ${name}');
  }, [name]);
  return(
    <div>
      <p>Count: {count}</p>
      <button  onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Name: {name}</p>
      <input style={{border: "solid 1px black"}} 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
    </div>
  );
}