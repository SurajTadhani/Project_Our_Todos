import React from "react";

function Content() {
  return (
    <div className="pt-20 space-y-8">
      <div className="space-y-5">
        <h1 className="text-4xl">How a Todo List Project Works in React.js</h1>
      <hr />
      </div>
      <div  className="space-y-3">
        <h2 className="text-3xl">Component-Based Structure:</h2>
        <p className="text-xl">
          1. The project is built using a component-based architecture, with a main
          App component managing the overall state and Todo components
          representing individual todo items.
        </p>
      </div>
      <div  className="space-y-3">
        <h2 className="text-3xl">State Management:</h2>
        <p className="text-xl">
          2. The useState hook is utilized to manage the list of todos and the
          current input value. This allows the application to keep track of what
          the user types and what todos need to be displayed
        </p>
      </div>
      <div  className="space-y-3">
        <h2 className="text-3xl">Adding Todos:</h2>
        <p className="text-xl">
         3.  When the user submits the form, an addTodo function is called. This
          function adds the current input value to the list of todos and clears
          the input field.
        </p>
      </div>
      <div  className="space-y-3">
        <h2 className="text-3xl">Removing Todos:</h2>
        <p className="text-xl">
         4.  Each Todo component includes a button that, when clicked, triggers a
          function to remove that specific todo from the list. The state is
          updated, and the UI re-renders to reflect the change.
        </p>
      </div>
    </div>
  );
}

export default Content;
