import React from "react";

import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={props.image} alt="" />
      <div>
        <p>{props.message}</p>
        <h2>{props.likesCount}</h2>
      </div>
    
  

    </div>

  )
}


export default Post;
