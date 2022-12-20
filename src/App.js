
import { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  state={
    posts: []
  }
componentDidMount(){
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(res=>{
    const posts = res.data;
    this.setState({posts})
  })
}
  render(){
  return (

    <div>
      {this.state.posts.map(posts=>

      <div>
      <p key={posts.id}>{posts.title}</p>
      <p key={posts.id}>{posts.body}</p>
      </div>
      )
  }
    </div>
  );
}}

export default App;
