export default class TapTextField extends React.Component {

	/**
	 * @param props.value
	 * @param props.readonly
	 */
	constructor(props) {
		super(props);

		this.state = {
			value: props.value || ''
		};

		this.onChange = this.onChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			value: nextProps.value || ''
		});
	}

	onChange(event) {
		event.preventDefault();

		this.setState({
			value: event.target.value || ''
		});
	}
	
	render() {
		return (
			<div className="form-group">
				<label htmlFor={this.props.name} className="col-lg-2 control-label">{this.props.desc}</label>
				<div className="col-lg-10">
					<input type="text"
						className="form-control"
						id={this.props.name}
						readOnly={this.props.readonly}
						placeholder={this.props.desc}
						value={this.state.value}
						onChange={this.onChange}
					/>
				</div>
			</div>
		);
	}

}