import React from 'react';
import Form from './Form.jsx';
import SortedList from './SortedList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    // sorted: [];
    };
  }

  render() {

    return (
      <div id="app">
        <h1>charSortinator 2</h1>
        <Form />
        <SortedList />
      </div>
    );
  }
}

export default App;
