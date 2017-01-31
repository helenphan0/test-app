import { ADD_ITEM } from '../actions/add_item';
import { REMOVE_ITEM } from '../actions/remove_item';

export default function(state = [], action) {
	switch (action.type) {
	case ADD_ITEM:
		return [ action.payload, ...state ];  // same as state.concat([ action.payload.data])
	case REMOVE_ITEM:
		let array = state.slice(0);
		const index = array.indexOf(action.payload);
		if (index > -1) {
			array.splice(index, 1);
		}
		return array;
	}

	return state;
}