import TapGrid from './TapGrid'
import TapForm from './TapForm'


export default class TapEditPage extends React.Component {

	constructor() {
		super();

		this.title = 'Edit';
	}

	getTapHead() {
		return 	<div className="page-header">
			      <div className="row">
			        <h1>{this.title}</h1>
			      </div>
			    </div>;
	}

	render () {
		let tapHead = this.getTapHead();

		return  <div>
					{tapHead}
				    <TapGrid />
				    <TapForm />
				</div>;
	}

}