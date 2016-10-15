export default class TapRow extends React.Component {

	render() {
		let entry = this.props.entry;
		return (
			<tr>
				<td>{entry.id}</td>
				<td>{entry.string}</td>
				<td>{entry.date}</td>
				<td>{entry.number}</td>
				<td>{entry.boolean + ''}</td>
			</tr>
		);
	}

}