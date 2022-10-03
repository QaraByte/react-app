import React, { useState } from "react";

const Counter=function(){
    const [count,setCount]=useState(0);

    function Increment(){
        setCount(count+1);
    }
    function Decrement(){
        setCount(count-1);
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}

export default Counter;