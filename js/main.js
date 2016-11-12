import { createStore } from 'redux';
import { Provider } from 'react-redux';

import tapReducer from './reducers/tapReducer';
import TapEditPageContainer from './containers/TapEditPageContainer';


const store = createStore(tapReducer);
window.store = store;


$(document).ready(function() {

	ReactDOM.render(
		<Provider store={store}>
			<TapEditPageContainer />
		</Provider>,
		document.getElementById('container')
	);

});
