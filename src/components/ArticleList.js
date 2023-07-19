import React from "react";
import Article from "./Article";

const ArticleList=({posts})=>{
    return (  
<>
<main>
{posts.map((post)=> (
    <Article
    key={post.id}
    post={post.title}
    preview={post.preview}
    minutes={post.minutes}
 />
))}
</main>
</>
    )
}

export default ArticleList;