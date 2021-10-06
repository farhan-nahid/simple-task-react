import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const myStyle = {
    color: "red",
    backgroundColor: "green",
    padding: "20px",
  };

  return (
    <section className="App">
      <article className="blog">
        <h2 style={myStyle}>Blog 1</h2>
        <h5>Author Name: abc</h5>
        <p style={{ color: "gray" }}>
          blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog
          1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog
          1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog
          1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog
          1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog
          1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1blog 1
        </p>

        <Blog name="Blog - 1" author="author - 1" />
        <Blog name="Blog - 2" author="author - 2" />
        <Blog name="Blog - 3" author="author - 3" />
        <Mobile />
        <LoadTODO />
      </article>
    </section>
  );
}

function Blog(props) {
  return (
    <div className="blog">
      <h2>Name:{props.name}</h2>
      <h5>Author:{props.author}</h5>
    </div>
  );
}

function Mobile() {
  const [charge, setCharge] = useState(0);

  const handleUp = () => (charge < 100 ? setCharge(charge + 10) : charge);
  const handleDown = () => (charge > 0 ? setCharge(charge - 10) : charge);

  return (
    <div>
      <h1>Battery have {charge}% charge</h1>
      <button onClick={handleUp}>Charge Up</button>
      <button onClick={handleDown}>Charge down</button>
    </div>
  );
}

function LoadTODO() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="all__todo">
      {todos.length > 0
        ? todos.map((todo) => <TODO key={todo.key} todo={todo} />)
        : "Loading"}
    </div>
  );
}

function TODO({ todo }) {
  return (
    <div className="todo">
      <h4>User ID: {todo.userId}</h4>
      <h1>Todo Title: {todo.title}</h1>
    </div>
  );
}

export default App;
