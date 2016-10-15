import TapRow from './TapRow'

export default class TapGrid extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
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
			]
		};
	}
	
	render() {
		return (
			<div className="row">
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>ID</th>
							<th>String</th>
							<th>Date</th>
							<th>Number</th>
							<th>Boolean</th>
						</tr>
					</thead>
					<tbody>
						{this.state.entries.map(entry => 
							<TapRow key={entry.id} entry={entry} />
						)}
					</tbody>
				</table>
			</div>
		);
	}

}