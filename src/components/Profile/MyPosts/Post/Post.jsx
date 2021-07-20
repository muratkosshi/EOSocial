import React from 'react';
import s from './Post.module.css';
import avatar from './../../../../image/KXDSzDxhoL8.jpg'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={avatar} />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;