export default class TapCheckboxField extends React.Component {

	/**
	 * @param props.value
	 */
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value || false
		};

		this.onChange = this.onChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			value: nextProps.value || false
		});
	}

	onChange(event) {
		this.setState({
			value: event.target.checked
		});
	}
	
	render() {
		return (
			<div className="form-group">
				<div className="col-lg-10">
					<div className="checkbox">
						<label>
							<input type="checkbox" 
								id={this.props.name} 
								checked={this.state.value}
								onChange={this.onChange}
							/>
							{this.props.desc}
						</label>
					</div>
				</div>
			</div>
		);
	}

}