import TapRow from './TapRow';

export default class TapGrid extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			entries: []
		};
	}

	componentWillMount() {
		this.state.entries = this.props.entriesLoader();
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
							<TapRow key={entry.id} entry={entry} onSelect={this.props.onSelect} />
						)}
					</tbody>
				</table>
			</div>
		);
	}

}