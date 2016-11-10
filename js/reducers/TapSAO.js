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

	getEntry(id) {
		return this.state.entries.get(id);
	}

	getSelectedEntry() {
		return this.getEntry(this.state.selectedId);
	}

	getMode() {
		return this.state.mode;
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
