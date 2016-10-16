export default class TapTextareaField extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			value: ""
		};
	}
	
	render() {
		return (
			<div className="form-group">
				<label htmlFor={this.props.name} className="col-lg-1 control-label">{this.props.desc}</label>
				<div className="col-lg-11">
					<textarea className="form-control" rows="3" id={this.props.name}></textarea>
					<span className="help-block">{this.props.help}</span>
				</div>
			</div>
		);
	}

}