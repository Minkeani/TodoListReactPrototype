import React, { useState }  from 'react';
import { FC } from 'react';
import { PostProps } from './types/types';
import './App.css';

const App: FC  = () => {

  const [posts, setPosts] = useState<PostProps>({
    id: 1, title: 'description', body: 'body'
  })

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
