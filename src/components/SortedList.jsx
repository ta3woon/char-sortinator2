import React from 'react';
import SortItem from './SortItem.jsx';

class SortedList extends React.Component {
render() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <td>INPUT</td>
            <td>OUTPUT</td>
          </tr>
        </thead>
        <tbody>
          <p>Stuff</p>
        </tbody>
      </table>
    </div>
    )
  }
}

export default SortedList;