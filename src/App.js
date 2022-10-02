import React, {useState} from 'react';

function App() {
    // const [count,setCount]=useState(6)
    // console.log(count);
    // console.log(setCount);
    // return ( <div className="App">

    // </div>
    const [likes, setLikes]=useState(0);
    const[value,setValue]=useState('Текст в инпуте');
    function Increment(){
        setLikes(likes+1);
    }
    function Decrement(){
        setLikes(likes-1);
    }

    return (
    <div className='app'>
        <h3>{likes}</h3>
        <h3>{value}</h3>
        <input type="text" value={value} onChange={event=>setValue(event.target.value)}/>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
    );
}

export default App;