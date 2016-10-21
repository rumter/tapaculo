import TapTextField from './TapTextField';
import TapDateField from './TapDateField';
import TapCheckboxField from './TapCheckboxField';
import TapTextareaField from './TapTextareaField';

const MODES = Object.freeze({
	VIEW_DETAILS: 1,
	CREATE: 2,
	EDIT: 3
});

const LEGENDS = Object.freeze({
	[MODES.VIEW_DETAILS]: "Details",
	[MODES.CREATE]: "Create new entry",
	[MODES.EDIT]: "Edit entry"
});

export default class TapForm extends React.Component {

	/**
	 * @param props.entry
	 * @props props.onCancel
	 * @props props.onSubmit
	 */
	constructor(props) {
		super(props);

		this.state = {
			entry: this.props.entry,
			mode: MODES.VIEW_DETAILS
		};

		this.onCancel = this.onCancel.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ entry: nextProps.entry, mode: MODES.EDIT });
	}

	onCancel(event) {
		event.preventDefault();
		this.setState({ entry: this.props.entry, mode: MODES.VIEW_DETAILS });
		this.props.onCancel();
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.onSubmit();
	}

	getButtonsStyleClass() {
		let styleClasses = ["form-group"];

		if (this.state.mode == MODES.VIEW_DETAILS) {
			styleClasses.push("hide");
		}

		return styleClasses.join(" ");
	}
	
	render() {
		let entry = this.state.entry;
		return (
			<div className="row well">
				<form className="form-horizontal">
					<fieldset>
						<legend>{LEGENDS[this.state.mode]}</legend>
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

						<div className={this.getButtonsStyleClass()}>
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