export default class TapCheckboxField extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			value: false
		};
	}
	
	render() {
		return (
			<div className="form-group">
				<div className="col-lg-10">
					<div className="checkbox">
						<label>
							<input type="checkbox" id={this.props.name} />
							{this.props.desc}
						</label>
					</div>
				</div>
			</div>
		);
	}

}