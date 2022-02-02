
function ServerSideRender({ todos }) {

  return (
    <div>
      <h3>Server Side Render</h3>
      {/* 'todos' may be 'undefined' initially so protect using the '?' operator */}
      {todos?.length === 0 ? (
        // display loading indicator if todos array empty
        <div>Loading...</div>
      ) : (
        // display list of todos
        todos?.map((todo) => (
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

export default ServerSideRender;
