import TapTextField from './TapTextField';
import TapDateField from './TapDateField';
import TapCheckboxField from './TapCheckboxField';
import TapTextareaField from './TapTextareaField';

export default class TapForm extends React.Component {

	/**
	 * @param props.title
	 * @param props.entry
	 * @param props.enabled
	 * @param props.btnsEnabled
	 * @props props.onCancel
	 * @props props.onSubmit
	 */
	constructor(props) {
		super(props);

		this.state = {
			entry: this.props.entry,
		};

		this.onCancel = this.onCancel.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ entry: nextProps.entry });
	}

	onCancel(event) {
		event.preventDefault();
		this.props.onCancel();
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.onSubmit();
	}

	getFormStyleClasses() {
		let styleClasses = ["row", "well"];

		if (! this.props.enabled) {
			styleClasses.push("hide");
		}

		return styleClasses.join(" ");
	}

	getButtonsStyleClasses() {
		let styleClasses = ["form-group"];

		if (! this.props.btnsEnabled) {
			styleClasses.push("hide");
		}

		return styleClasses.join(" ");
	}
	
	render() {
		let entry = this.state.entry;
		return (
			<div className={this.getFormStyleClasses()}>
				<form className="form-horizontal">
					<fieldset>
						<legend>{this.props.title}</legend>
						<div className="row">
							<div className="col-lg-6">
								<TapTextField name="inputString" desc="String" value={entry.string} />
								<TapDateField name="inputDate" desc="Date" value={entry.date} />
							</div>
							<div className="col-lg-6">
								<TapTextField name="inputNumber" desc="Number" value={entry.number} />
								<TapCheckboxField name="inputBoolean" desc="Boolean" value={entry.boolean} />
							</div>
						</div>

						<TapTextareaField
							name="inputTextarea"
							desc="Textarea"
							value={entry.text}
							help="Some help description"
						/>

						<div className={this.getButtonsStyleClasses()}>
							<div className="col-lg-1 col-lg-offset-1">
								<button type="reset"
									className="btn btn-default"
									onClick={this.onCancel}>Cancel</button>
							</div>
							<div className="col-lg-1">
								<button type="submit"
									className="btn btn-primary"
									onClick={this.onSubmit}>Submit</button>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		);
	}

}