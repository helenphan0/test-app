import { ADD_CHECKED_ITEM } from '../actions/add_checked_item';
import { REMOVE_CHECKED_ITEM } from '../actions/remove_checked_item';

export default function(state = [], action) {
	switch (action.type) {
	case ADD_CHECKED_ITEM:
		return [ action.payload, ...state ];  // same as state.concat([ action.payload.data])
	case REMOVE_CHECKED_ITEM:
		let array = state.slice(0);
		const index = array.indexOf(action.payload);
		if (index > -1) {
			array.splice(index, 1);
		}
		return array;
	}

	return state;
}