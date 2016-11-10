import { createStore } from 'redux';

import tapReducer from './reducers/tapReducer';
import TapEditPage from './components/TapEditPage';


const store = createStore(tapReducer);


$(document).ready(function() {

	ReactDOM.render(
		<TapEditPage />,
		document.getElementById('container')
	);

});
