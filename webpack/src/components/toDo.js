import React from 'react';

class ToDo extends React.component {
  render() {
    return(
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1>My To Do App</h1>
              <hr/>
              List goes here.
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default TODo;