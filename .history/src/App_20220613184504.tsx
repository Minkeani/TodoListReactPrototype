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
      12
      {posts.map((post: any) => 
        <div>{post}1</div>
      )}
    </div>
  );
}

export default App;
