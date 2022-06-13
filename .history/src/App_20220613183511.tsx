import React, { useState }  from 'react';
import { FC } from 'react';
import PostList from './components/PostList';
import { PostProps } from './types/types';
import './App.css';

const App: FC  = () => {

  const [posts, setPosts] = useState<Object>([{
    id: 1, title: 'description', body: 'body'
  }])

  return (
    <div className="App">
      {posts.map((post: any) => 
          <div>{post}</div>
      )}
    </div>
  );
}

export default App;