import React from 'react';

//declarative
function ItemList() {
  return (
    <ul>
      <li>I am learning reactJS</li>
      <li>this is my first project</li>
      <li>So far loved it</li>
    </ul>
  );
}

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <ItemList />  
      <ItemList />
    </div>
  );
}

export default App;
