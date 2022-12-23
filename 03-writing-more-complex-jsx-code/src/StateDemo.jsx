import React, { useState } from 'react'

function StateDemo() {
    const [count,setCount] = useState(0);
    const increment = ()=>{
        let c = count;
        setCount(++c);
    }
    const decrement = ()=>{
        let c = count;
        setCount(--c);
    }
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default StateDemo