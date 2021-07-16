import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home'
import Error from './Components/Error/Error';
import PostsList from './Components/PostsList/PostsList';
import Post from './Components/Post/Post';
import Comments from './Components/Comments/Comments';

function App() {
 

  return (
    <div className="App">

       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users/:id/posts" component={PostsList} />
        <Route exact path="/users/post/:id" component={Post} />
        <Route path="/users/post/:id/comments" component={Comments} />
        <Route path="/*" component={Error} />
      </Switch>

    </div>
  );
}

export default App;
