import React, {useState} from 'react';
import ClassCounter from './Components/ClassCounter';
import Counter from './Components/Counter';
import PostItem from './Components/PostItem';
import './styles/app.css'

function App() {
    // const [count,setCount]=useState(6)
    // console.log(count);
    // console.log(setCount);
    // return ( <div className="App">

    // </div>
    const [likes, setLikes]=useState(0);
    const[value,setValue]=useState('Текст в инпуте');
    

    return (
    <div className='app'>
       <PostItem/>
       <PostItem/>
       <PostItem/>
       <PostItem/>
    </div>
    );
}

export default App;