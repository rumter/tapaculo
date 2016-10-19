import TapTitle from './TapTitle';
import TapGrid from './grid/TapGrid';
import TapForm from './form/TapForm';

export default class TapEditPage extends React.Component {

	constructor(props) {
		super(props);

		this.loadEntries = this.loadEntries.bind(this);
		this.onSelect = this.onSelect.bind(this);
	}

	loadEntries() {
		return [
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
		];
	}

	onSelect(entry) {
		console.log(entry);
	}

	render() {
		return (
			<div>
				<TapTitle title="Edit" />
				<TapGrid
					entriesLoader={this.loadEntries} 
					onSelect={this.onSelect} 
				/>
				<TapForm />
			</div>
		);
	}

}