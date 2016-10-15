export default class TapTextField extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			value: ""
		};
	}
	
	render() {
		return (
			<div className="form-group">
				<label htmlFor={this.props.name} className="col-lg-2 control-label">{this.props.desc}</label>
				<div className="col-lg-10">
					<input className="form-control" type="text" id={this.props.name} placeholder={this.props.desc} />
				</div>
			</div>
		);
	}

}