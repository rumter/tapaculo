export default class TapGrid extends React.Component {

	constructor(props) {
		super(props);

		this.data = [
			{id: 1, string: 'Canada', date: '19.08.2016', number: 61, boolean: true },
			{id: 2, string: 'Philippines', date: '02.05.2016', number: 56, boolean: false },
			{id: 3, string: 'Indonesia', date: '17.05.2016', number: 28, boolean: true },
			{id: 4, string: 'China', date: '15.03.2016', number: 54, boolean: true },
			{id: 5, string: 'France', date: '23.02.2016', number: 39, boolean: true },
			{id: 6, string: 'France', date: '08.04.2016', number: 51, boolean: false },
			{id: 7, string: 'Mexico', date: '21.04.2016', number: 9, boolean: false },
			{id: 8, string: 'Brazil', date: '03.01.2016', number: 97, boolean: true },
			{id: 9, string: 'Brazil', date: '10.12.2015', number: 81, boolean: false },
			{id: 10, string: 'Indonesia', date: '19.11.2015', number: 71, boolean: true }
		];
	}
	
	render() {
		return	<div className="row">
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
						{this.data.map(entry => <tr>
						    <td>{entry.id}</td>
						    <td>{entry.string}</td>
						    <td>{entry.date}</td>
						    <td>{entry.number}</td>
						    <td>{entry.boolean + ''}</td>
						  </tr>)}
					</tbody>
					</table>
				</div>;
	}

}