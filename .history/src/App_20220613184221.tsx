import React, { useState }  from 'react';
import { FC } from 'react';
import PostList from './components/PostList';
import { PostsProps, PostProps } from './types/types';
import './App.css';

const App: FC  = () => {

  const [posts, setPosts] = useState<PostsProps[]>([{
    id: 1, title: 'description', body: 'body'
  }])

  return (
    <div className="App">
      {posts.map((post<PostsProps[]>) => 
        <div>{post.id}</div>
      )}
    </div>
  );
}

export default App;
