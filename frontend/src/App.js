import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react';

function App() {

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [profile, setProfile] = useState({});

  const getData = async (tipo) => {
    /*  http://0.0.0.0:3000/posts
  http://0.0.0.0:3000/comments
  http://0.0.0.0:3000/profile */
    return await fetch(`http://localhost:3000/${tipo}`)
        .then((response) => response.json() )
        .then((data) => {
            return data
        })
        .catch(() => {});
};

useEffect(() => {
  getData('posts').then((datos) => setPosts(datos));
  getData('comments').then((datos) => setComments(datos));
  getData('profile').then((datos) => setProfile(datos));
});


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Posts</h3>
        <p>
          Titulo: {posts.length > 0 && posts[0].hasOwnProperty('title')  ? posts[0].title : ''}
          <br/>
          Autor: {posts.length > 0 && posts[0].hasOwnProperty('author')  ? posts[0].author : ''}
        </p>

        <h3>Comments</h3>
        <p>
          Body: {comments.length > 0 && comments[0].hasOwnProperty('body')  ? comments[0].body : ''}

        </p>

        <h3>Profile</h3>
        <p>
          Nombre: {profile.hasOwnProperty('name') ? profile.name : ''}
        </p>
      </header>
    </div>
  );
}

export default App;
