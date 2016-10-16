export default class TapRow extends React.Component {

	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		e.preventDefault();
		this.props.onSelect(this.props.entry);
	}

	render() {
		let entry = this.props.entry;
		return (
			<tr onClick={this.onClick}>
				<td>{entry.id}</td>
				<td>{entry.string}</td>
				<td>{entry.date}</td>
				<td>{entry.number}</td>
				<td>{entry.boolean + ''}</td>
			</tr>
		);
	}

}