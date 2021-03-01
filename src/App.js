import React from 'react'

function Food(props) {
  console.log(props)
  return <h2>I {props.prefer} {props.type}</h2>
}

function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <Food prefer='like' type='kimchi' />
      <Food prefer='hate' type='brocolli'/>
      <Food prefer='like' type='ramen' />
    </div>
  );
}

export default App;
