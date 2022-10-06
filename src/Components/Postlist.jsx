import React from "react";
import PostItem from "./PostItem";

const Postlist=({posts, title})=>{
    // console.log(posts);
    return (
        <div>
            <h3 style={{textAlign:'center'}}>{title}</h3>
            {posts.map(post=>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    )
}

export default Postlist;