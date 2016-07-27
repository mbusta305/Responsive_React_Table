import React from 'react';
import ReactDOM from 'react-dom';
import ResponsiveTable from './components/ResponsiveTable';

var App = React.createClass({
  render: function () {
    return(
      <div>
        <ResponsiveTable />
      </div>
    )
  }
});

export default App;
