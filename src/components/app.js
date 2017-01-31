import React, { Component } from 'react';

import Input from '../containers/input';
import List from '../containers/list';
import CheckedList from '../containers/checked-list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Input />
      	<List />
      	<CheckedList />
      </div>
    );
  }
}
