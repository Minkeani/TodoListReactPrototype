import React from 'react'
import './PostItem.css'

const PostItem= ({id, title, body}) => {
  return (
    <div className='container'>
        <button>&#9989;</button>
        <div className='content'>
          <p className='post__id'>{id}</p>
          <p className='title'>{title}</p>
          <p className='body'>{body}</p>
        </div>
        <button className='delete'>Delete</button>
    </div>
  )
}
export default PostItem