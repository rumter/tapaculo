import TapTextField from './TapTextField';
import TapDateField from './TapDateField';
import TapCheckboxField from './TapCheckboxField';
import TapTextareaField from './TapTextareaField';

export default class TapForm extends React.Component {

	/**
	 * @param props.entry
	 */
	constructor(props) {
		super(props);

		this.state = {
			entry: this.props.entry
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			entry: nextProps.entry
		});
	}
	
	render() {
		let entry = this.state.entry;
		return (
			<div className="row well">
				<form className="form-horizontal">
					<fieldset>
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
							help="A longer block of help text that breaks onto a new line and may extend beyond one line." 
						/>

						<div className="form-group">
							<div className="col-lg-10 col-lg-offset-1">
								<button type="reset" className="btn btn-default">Cancel</button>
								<button type="submit" className="btn btn-primary">Submit</button>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		);
	}

}