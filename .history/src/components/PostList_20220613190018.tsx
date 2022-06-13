import React from 'react'
import PostItem from './PostItem'
import { FC } from 'react'

 const PostList: FC = ({post}: any) => {
    
  return (
    <div>
      <PostItem id={post.id} title={post.title} body={post.body}/>
    </div>
  )
}
export default PostList