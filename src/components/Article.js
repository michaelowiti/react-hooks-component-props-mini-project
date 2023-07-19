import React from "react";

const Article=({post,date="January 1, 1970",preview})=>{
    return(
        <>
        <article>
            <h3>{post} </h3>
            <small>{date}</small>
            <p>{preview}</p>

        </article>
        </>
    )

}
export default Article;