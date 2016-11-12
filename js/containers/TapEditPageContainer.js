import { connect } from 'react-redux';

import ActionTypes from '../constants/ActionTypes';
import TapSAO from '../reducers/TapSAO';
import TapEditPage from '../components/TapEditPage';


const TapEditPageContainer = connect(mapStateToProps, mapDispatchToProps)(TapEditPage);

export default TapEditPageContainer;


function mapStateToProps(state) {
	let tapSAO = new TapSAO(state);

	return {
		entriesList: tapSAO.getEntriesList(),
	 	selectedEntry: tapSAO.getSelectedEntry(),
		mode: tapSAO.getMode()
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onSelect: (entryId) => {
			dispatch({
				type: ActionTypes.OPEN_DETAILS_FORM,
				entryId: entryId
			});
		}
	};
}



