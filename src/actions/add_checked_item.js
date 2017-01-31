
export const ADD_CHECKED_ITEM = 'ADD_CHECKED_ITEM';

export function addCheckedItem(item) {
	return {
		type: ADD_CHECKED_ITEM,
		payload: item
	}
}