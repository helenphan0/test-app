// reducers combined

import { combineReducers } from 'redux';

import items from './handle_item_reducer';
import checkItems from './check_item_reducer';

const rootReducer = combineReducers({
  items,
  checkItems
});

export default rootReducer;
