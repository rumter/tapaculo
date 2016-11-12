import Immutable from 'immutable';

import Modes from '../constants/Modes';


/**
 * State access object for tap-entries
 */
export default class TapSAO {

	constructor(state) {
		this.state = state;
	}

	getState() {
		return this.state;
	}

	getEntriesMap() {
		return this.state.get('entries');
	}

	getEntriesList() {
		return this.getEntriesMap().toList();
	}

	getEntry(id) {
		return this.getEntriesMap().get(id + '');
	}

	getSelectedId() {
		return this.state.get('selectedId');
	}

	getSelectedEntry() {
		let selectedId = this.getSelectedId();
		if (selectedId == null) {
			return {};
		}
		return this.getEntry(selectedId);
	}

	getMode() {
		return this.state.get('mode');
	}

	select(id) {
		this.state = this.state.set('selectedId', id);
		this.state = this.state.set('mode', Modes.VIEW_DETAILS);
		return this.state;
	}

	unselect() {
		this.state = this.state.set('selectedId', null);
		this.state = this.state.set('mode', Modes.NOT_SELECTED);
		return this.state;
	}

}
