import { useState, useEffect } from 'react';

function ClientSideRender() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json();

      // set a delay to simulate loading time
      setTimeout(() => {
        setTodos(data);
      }, 1000);
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Client Side Render</h3>
      {todos.length === 0 ? (
        // display loading indicator if todos array empty
        <div>Loading...</div>
      ) : (
        // display list of todos
        todos.map((todo) => (
          <div key={todo.userId}>
            <p>
              {todo.id}-{todo.title}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default ClientSideRender;
