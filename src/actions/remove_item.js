export const REMOVE_ITEM = 'REMOVE_ITEM';

export function removeItem(item) {
	return {
		type: REMOVE_ITEM,
		payload: item
	}
}