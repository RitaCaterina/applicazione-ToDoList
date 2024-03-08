import React, { useState, useEffect } from 'react';
import './App.css';

function ToDoList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const Completa = (index) => {
    const aggiornaPosts = posts.map((post) => {
      if (post.id === index) {
        return { ...post, completed: true };
      }
      return post;
    });
    setPosts(aggiornaPosts);
  };

  const Cancella = (index) => {
    const aggiornaPosts = posts.filter((post) => post.id !== index);
    setPosts(aggiornaPosts);
  };

  return (
    <div>
      <h1>ToDoList</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            {post.completed && <span> (Completato)</span>}
            <button onClick={() => Completa(post.id)}>Completa</button>
            <button onClick={() => Cancella(post.id)}>Elimina</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

