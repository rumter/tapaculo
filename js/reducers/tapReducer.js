import Modes from '../constants/Modes';
import ActionTypes from '../constants/ActionTypes';

const initialState = {
	entries: [
		{ id: 1, 	string: 'Canada',	 	date: '19.08.2016',	number: 61,	boolean: true, 	text: 'Some text about Canada' 		},
		{ id: 2, 	string: 'Philippines', 	date: '02.05.2016',	number: 56,	boolean: false, text: 'Some text about Philippines' },
		{ id: 3, 	string: 'Indonesia', 	date: '17.05.2016',	number: 28,	boolean: true, 	text: 'Some text about Indonesia' 	},
		{ id: 4, 	string: 'China', 		date: '15.03.2016',	number: 54,	boolean: true, 	text: 'Some text about China' 		},
		{ id: 5, 	string: 'France', 		date: '23.02.2016',	number: 39,	boolean: true, 	text: 'Some text about France' 		},
		{ id: 6, 	string: 'France', 		date: '08.04.2016',	number: 51,	boolean: false, text: 'Some text about France' 		},
		{ id: 7, 	string: 'Mexico', 		date: '21.04.2016',	number: 9,	boolean: false, text: 'Some text about Mexico' 		},
		{ id: 8, 	string: 'Brazil', 		date: '03.01.2016',	number: 97,	boolean: true, 	text: 'Some text about Brazil' 		},
		{ id: 9, 	string: 'Brazil', 		date: '10.12.2015',	number: 81,	boolean: false, text: 'Some text about Brazil' 		},
		{ id: 10,	string: 'Indonesia', 	date: '19.11.2015',	number: 71,	boolean: true, 	text: 'Some text about Indonesia' 	}
	],
	selectedEntry: {},
	mode: Modes.NOT_SELECTED
};

const handlers = makeHandlers();

export default function tapReducer(state = initialState, action) {
	let handler = handlers.get(action.type);

	return handler(state, action);
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
 * @param action.entry
 */
function openDetailsForm(state, action) {
	return state;
}
function closeDetailsForm(state, action) {
	return state;
}
function openAddForm(state, action) {
	return state;
}
function closeAddForm(state, action) {
	return state;
}
function saveNewEntry(state, action) {
	return state;
}
function openEditForm(state, action) {
	return state;
}
function closeEditForm(state, action) {
	return state;
}
function saveEditedEntry(state, action) {
	return state;
}
function openDeleteForm(state, action) {
	return state;
}
function closeDeleteForm(state, action) {
	return state;
}
function deleteEntry(state, action) {
	return state;
}


