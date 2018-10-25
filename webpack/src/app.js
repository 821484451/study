import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './components/toDo';

class App extends React.Component {
  render() {
    return(
      <ToDo/>
    );
  };
};

ReactDOM.render(<App/>, document.getElementById('app'));