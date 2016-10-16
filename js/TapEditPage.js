import TapTitle from './TapTitle';
import TapGrid from './grid/TapGrid';
import TapForm from './form/TapForm';

export default class TapEditPage extends React.Component {

	constructor(props) {
		super(props);

		this.onSelect = this.onSelect.bind(this);
	}

	onSelect(entry) {
		console.log(entry);
	}

	render() {
		return (
			<div>
				<TapTitle title="Edit" />
				<TapGrid onSelect={this.onSelect} />
				<TapForm />
			</div>
		);
	}

}