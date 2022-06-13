import React from 'react'
import PostItem from './PostItem'

 const PostList = ({post}) => {
    
  return (
    <div>
      <PostItem id={post.id} title={post.title} body={post.body}/>
    </div>
  )
}
export default PostList