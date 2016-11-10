import Immutable from 'immutable';

import Modes from '../constants/Modes';


const tapInitialState = Immutable.fromJS({
	entries: Immutable.OrderedMap({
		1: 	{ id: 1, 	string: 'Canada',	 	date: '19.08.2016',	number: 61,	boolean: true, 	text: 'Some text about Canada' 		},
		2: 	{ id: 2, 	string: 'Philippines', 	date: '02.05.2016',	number: 56,	boolean: false, text: 'Some text about Philippines' },
		3: 	{ id: 3, 	string: 'Indonesia', 	date: '17.05.2016',	number: 28,	boolean: true, 	text: 'Some text about Indonesia' 	},
		4: 	{ id: 4, 	string: 'China', 		date: '15.03.2016',	number: 54,	boolean: true, 	text: 'Some text about China' 		},
		5: 	{ id: 5, 	string: 'France', 		date: '23.02.2016',	number: 39,	boolean: true, 	text: 'Some text about France' 		},
		6: 	{ id: 6, 	string: 'France', 		date: '08.04.2016',	number: 51,	boolean: false, text: 'Some text about France' 		},
		7: 	{ id: 7, 	string: 'Mexico', 		date: '21.04.2016',	number: 9,	boolean: false, text: 'Some text about Mexico' 		},
		8: 	{ id: 8, 	string: 'Brazil', 		date: '03.01.2016',	number: 97,	boolean: true, 	text: 'Some text about Brazil' 		},
		9: 	{ id: 9, 	string: 'Brazil', 		date: '10.12.2015',	number: 81,	boolean: false, text: 'Some text about Brazil' 		},
		10: { id: 10,	string: 'Indonesia', 	date: '19.11.2015',	number: 71,	boolean: true, 	text: 'Some text about Indonesia' 	}
	}),
	selectedId: null,
	editor: {
		entry: {}
	},
	mode: Modes.NOT_SELECTED
});

export default tapInitialState;

