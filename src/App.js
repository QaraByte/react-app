import React, {useState} from 'react';
import ClassCounter from './Components/ClassCounter';
import Counter from './Components/Counter';
import PostItem from './Components/PostItem';
import Postlist from './Components/Postlist';
import './styles/app.css'

function App() {
    // const [count,setCount]=useState(6)
    // console.log(count);
    // console.log(setCount);
    // return ( <div className="App">

    // </div>
    // const [likes, setLikes]=useState(0);
    // const[value,setValue]=useState('Текст в инпуте');

    const [posts,setPosts]=useState([
        {id:1, title:'Javascript', body:'Description'},
        {id:2, title:'Javascript 2', body:'Description'},
        {id:3, title:'Javascript 3', body:'Description'},
    ])

    const [posts2,setPosts2]=useState([
        {id:1, title:'Python 1', body:'Description'},
        {id:2, title:'Python 2', body:'Description'},
        {id:3, title:'Python 3', body:'Description'},
    ])
    

    return (
    <div className='app'>
       {/* <PostItem post={{id:1, title:'Javascript', body:'Description'}}/> */}
       
        <Postlist posts={posts} title="Список постов 1"/>
        <Postlist posts={posts2} title="Список постов 2"/>
    </div>
    );
}

export default App;