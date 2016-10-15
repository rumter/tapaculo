import TapTitle from './TapTitle';
import TapGrid from './grid/TapGrid';
import TapForm from './form/TapForm';

export default class TapEditPage extends React.Component {

	render () {
		return (
			<div>
				<TapTitle title="Edit" />
				<TapGrid />
				<TapForm />
			</div>
		);
	}

}