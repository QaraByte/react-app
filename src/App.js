import React, {useState} from 'react';

function App() {
    // const [count,setCount]=useState(6)
    // console.log(count);
    // console.log(setCount);
    // return ( <div className="App">

    // </div>
    let likes=0;

    function Increment(){
        likes+=1;
        console.log(likes);
    }

    return (
    <div className='app'>
        <h3>{likes}</h3>
        <button onClick={Increment}>Increment</button>
        <button onClick={()=>likes-=1}>Decrement</button>
    </div>
    );
}

export default App;