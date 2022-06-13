import React, { useState }  from 'react';
import { FC } from 'react';
import PostList from './components/PostList';
import { PostsProps, PostProps } from './types/types';
import './App.css';

const App  = () => {

  const [posts, setPosts]  = useState([{
    id: 1, title: 'description', body: 'body'
  }])

  return (
    <div className="App">
      {posts.map((post) => 
        <div key={post.id}>{post}</div>
      )}
    </div>
  );
}

export default App;
