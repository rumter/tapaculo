import ActionTypes from '../constants/ActionTypes';
import tapInitialState from './tapInitialState';
import TapSAO from './TapSAO';


const handlers = makeHandlers();


export default function tapReducer(state = tapInitialState, action) {
	let handler = handlers.get(action.type);

	if (! handler) {
		console.log("uknown action: ", action);
		return state;
	}

	let tapSAO = new TapSAO(state);

	return handler(tapSAO, action);
}


function makeHandlers() {
	return new Map([
		[ActionTypes.OPEN_DETAILS_FORM, openDetailsForm],
		[ActionTypes.CLOSE_DETAILS_FORM, closeDetailsForm],
		[ActionTypes.OPEN_ADD_FORM, openAddForm],
		[ActionTypes.CLOSE_ADD_FORM, closeAddForm],
		[ActionTypes.SAVE_NEW_ENTRY, saveNewEntry],
		[ActionTypes.OPEN_EDIT_FORM, openEditForm],
		[ActionTypes.CLOSE_EDIT_FORM, closeEditForm],
		[ActionTypes.SAVE_EDITED_ENTRY, saveEditedEntry],
		[ActionTypes.OPEN_DELETE_FORM, openDeleteForm],
		[ActionTypes.CLOSE_DELETE_FORM, closeDeleteForm],
		[ActionTypes.DELETE_ENTRY, deleteEntry]
	]);
}

/**
 * @param action.entryId
 */
function openDetailsForm(tapSAO, action) {
	return tapSAO.select(action.entryId);
}
function closeDetailsForm(tapSAO, action) {
	return tapSAO.unselect();
}
function openAddForm(tapSAO, action) {
	// todo: impl
	return tapSAO.getState();
}
function closeAddForm(tapSAO, action) {
	// todo: impl
	return tapSAO.getState();
}
function saveNewEntry(tapSAO, action) {
	// todo: impl
	return tapSAO.getState();
}
function openEditForm(tapSAO, action) {
	// todo: impl
	return tapSAO.getState();
}
function closeEditForm(tapSAO, action) {
	// todo: impl
	return tapSAO.getState();
}
function saveEditedEntry(tapSAO, action) {
	// todo: impl
	return tapSAO.getState();
}
function openDeleteForm(tapSAO, action) {
	// todo: impl
	return tapSAO.getState();
}
function closeDeleteForm(tapSAO, action) {
	// todo: impl
	return tapSAO.getState();
}
function deleteEntry(tapSAO, action) {
	// todo: impl
	return tapSAO.getState();
}


