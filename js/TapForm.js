export default class TapForm extends React.Component {
	
	render() {
		return 	<div className="row well">
					<form className="form-horizontal">
						<fieldset>
						  <div className="row">

						    <div className="col-lg-6">
						      <div className="form-group">
						        <label htmlFor="inputString" className="col-lg-2 control-label">String</label>
						        <div className="col-lg-10">
						          <input className="form-control" id="inputString" placeholder="String" type="text" />
						        </div>
						      </div>

						      <div className="form-group">
						        <label htmlFor="inputDate" className="col-lg-2 control-label">Date</label>
						        <div className="col-lg-10">
						          <input className="form-control" id="inputDate" placeholder="Date" type="date" />
						        </div>
						      </div>
						    </div>

						    <div className="col-lg-6">
						      <div className="form-group">
						        <label htmlFor="inputNumber" className="col-lg-2 control-label">Number</label>
						        <div className="col-lg-10">
						          <input className="form-control" id="inputNumber" placeholder="Number" type="text" />
						        </div>
						      </div>

						      <div className="form-group">              
						        <div className="col-lg-10">
						          <div className="checkbox">
						            <label>
						              <input type="checkbox" /> Boolean
						            </label>
						          </div>
						        </div>
						      </div>
						    </div>

						  </div>

						  <div className="form-group">
						    <label htmlFor="textArea" className="col-lg-1 control-label">Textarea</label>
						    <div className="col-lg-11">
						      <textarea className="form-control" rows="3" id="textArea"></textarea>
						      <span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
						    </div>
						  </div>
						  
						  <div className="form-group">
						    <div className="col-lg-10 col-lg-offset-1">
						      <button type="reset" className="btn btn-default">Cancel</button>
						      <button type="submit" className="btn btn-primary">Submit</button>
						    </div>
						  </div>
						  
						</fieldset>
					</form>
				</div>;
	}

}