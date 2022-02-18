import React from 'react';
import ReactDOM from 'react-dom';

function App1(props) {
  return (
    <div>
      <h1>comp.1</h1>
      <p>{props.name}</p>
    </div>
  );
}

function App2(props) {
  return (
    <div>
      <h1>comp.2</h1>
      <p>{props.middlename}</p>
      <App1 name="Sergio" />
    </div>
  );
}

function App3(props) {
  return (
    <div>
      <h1>comp.3</h1>
      <p>{props.lastname} {props.middlename} {props.name}</p>
      <App2 middlename="J." />
    </div>
  );
}

ReactDOM.render(<App3 lastname="Carrasco" middlename="J." name="Sergio" />, document.getElementById('root'));
