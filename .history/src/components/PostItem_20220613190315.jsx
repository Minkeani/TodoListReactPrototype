import React from 'react'

const PostItem= ({id, title, body}) => {
  return (
    <div className='container'>
        <div className='content'>
          <p>{id}</p>
          <p className='title'>{title}</p>
        </div>
    </div>
  )
}
export default PostItem