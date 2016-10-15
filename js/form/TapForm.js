import TapTextField from './TapTextField';
import TapDateField from './TapDateField';
import TapCheckboxField from './TapCheckboxField';
import TapTextareaField from './TapTextareaField';

export default class TapForm extends React.Component {
	
	render() {
		return (
			<div className="row well">
				<form className="form-horizontal">
					<fieldset>
						<div className="row">
							<div className="col-lg-6">
								<TapTextField name="inputString" desc="String" />
								<TapDateField name="inputDate" desc="Date" />
							</div>
							<div className="col-lg-6">
								<TapTextField name="inputNumber" desc="Number" />
								<TapCheckboxField name="inputBoolean" desc="Boolean" />
							</div>
						</div>

						<TapTextareaField name="inputTextarea" desc="Textarea" help="A longer block of help text that breaks onto a new line and may extend beyond one line." />

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