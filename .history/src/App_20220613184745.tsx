import React, { useState }  from 'react';
import { FC } from 'react';
import PostList from './components/PostList';
import { PostsProps, PostProps } from './types/types';
import './App.css';

const App: FC  = () => {

  const [posts, setPosts] = useState<T[]>([{
    id: 1, title: 'description', body: 'body'
  }])

  return (
    <div className="App">
      {posts.map((post: any) => 
        <div key={post.id}>{post}1</div>
      )}
    </div>
  );
}

export default App;
