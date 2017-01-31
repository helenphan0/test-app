
export const REMOVE_CHECKED_ITEM = 'REMOVE_CHECKED_ITEM';

export function removeCheckedItem(item) {
	return {
		type: REMOVE_CHECKED_ITEM,
		payload: item
	}
}