export default class TapTextareaField extends React.Component {

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
				<label htmlFor={this.props.name} className="col-lg-1 control-label">{this.props.desc}</label>
				<div className="col-lg-11">
					<textarea 
						className="form-control" 
						rows="3" 
						id={this.props.name}
						value={this.state.value}
						readOnly={this.props.readonly}
						onChange={this.onChange}
					></textarea>
					<span className="help-block">{this.props.help}</span>
				</div>
			</div>
		);
	}

}