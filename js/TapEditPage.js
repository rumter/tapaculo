import TapTitle from './TapTitle';
import TapGrid from './grid/TapGrid';
import TapForm from './form/TapForm';
import TapToolbar from './TapToolbar';

const Modes = Object.freeze({
	NOT_SELECTED: 1,
	VIEW_DETAILS: 2,
	CREATE: 3,
	EDIT: 4
});

const ToolbarEnables = Object.freeze({
	[Modes.NOT_SELECTED]: {
		create: true,
		edit: false,
		delete: false
	},
	[Modes.VIEW_DETAILS]: {
		create: true,
		edit: true,
		delete: true
	},
	[Modes.CREATE]: {
		create: false,
		edit: false,
		delete: false
	},
	[Modes.EDIT]: {
		create: false,
		edit: false,
		delete: false
	}
});

const FormTitles = Object.freeze({
	[Modes.NOT_SELECTED]: "",
	[Modes.VIEW_DETAILS]: "Details",
	[Modes.CREATE]: "Create new entry",
	[Modes.EDIT]: "Edit entry"
});

const FormEnables = Object.freeze({
	[Modes.NOT_SELECTED]: false,
	[Modes.VIEW_DETAILS]: true,
	[Modes.CREATE]: true,
	[Modes.EDIT]: true
});

const FormButtonsEnables = Object.freeze({
	[Modes.NOT_SELECTED]: false,
	[Modes.VIEW_DETAILS]: false,
	[Modes.CREATE]: true,
	[Modes.EDIT]: true
});

export default class TapEditPage extends React.Component {

	/**
	 * @param props: []
	 */
	constructor(props) {
		super(props);

		this.state = {
			selectedEntry: {},
			mode: Modes.NOT_SELECTED
		};

		this.loadEntries = this.loadEntries.bind(this);
		this.onCreate = this.onCreate.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	loadEntries() {
		return [
			{ id: 1, 	string: 'Canada',	 	date: '19.08.2016',	number: 61,	boolean: true, 	text: 'Some text about Canada' 		},
			{ id: 2, 	string: 'Philippines', 	date: '02.05.2016',	number: 56,	boolean: false, text: 'Some text about Philippines' },
			{ id: 3, 	string: 'Indonesia', 	date: '17.05.2016',	number: 28,	boolean: true, 	text: 'Some text about Indonesia' 	},
			{ id: 4, 	string: 'China', 		date: '15.03.2016',	number: 54,	boolean: true, 	text: 'Some text about China' 		},
			{ id: 5, 	string: 'France', 		date: '23.02.2016',	number: 39,	boolean: true, 	text: 'Some text about France' 		},
			{ id: 6, 	string: 'France', 		date: '08.04.2016',	number: 51,	boolean: false, text: 'Some text about France' 		},
			{ id: 7, 	string: 'Mexico', 		date: '21.04.2016',	number: 9,	boolean: false, text: 'Some text about Mexico' 		},
			{ id: 8, 	string: 'Brazil', 		date: '03.01.2016',	number: 97,	boolean: true, 	text: 'Some text about Brazil' 		},
			{ id: 9, 	string: 'Brazil', 		date: '10.12.2015',	number: 81,	boolean: false, text: 'Some text about Brazil' 		},
			{ id: 10,	string: 'Indonesia', 	date: '19.11.2015',	number: 71,	boolean: true, 	text: 'Some text about Indonesia' 	}
		];
	}

	onSelect(entry) {
		this.setState({ selectedEntry: entry, mode: Modes.VIEW_DETAILS });
		console.log(entry);
	}

	onCreate() {
		this.setState({ selectedEntry: {}, mode: Modes.CREATE });
		console.log("create");
	}

	onEdit() {
		this.setState({ mode: Modes.EDIT });
		console.log("edit");
	}

	onDelete() {
		console.log("delete");
	}

	onCancel() {
		if (this.state.mode == Modes.CREATE) {
			this.setState({ mode: Modes.NOT_SELECTED });
		} else if (this.state.mode == Modes.EDIT) {
			this.setState({ mode: Modes.VIEW_DETAILS });
		} else {
			console.error("onCancel: unsupported state: ", this.state);
			return;
		}
		
		console.log("cancel");
	}

	onSubmit() {
		console.log("submit");
	}

	render() {
		return (
			<div>
				<TapTitle title="Edit" />
				<TapToolbar 
					createEnabled={ToolbarEnables[this.state.mode].create}
					editEnabled={ToolbarEnables[this.state.mode].edit}
					deleteEnabled={ToolbarEnables[this.state.mode].delete}
					onCreate={this.onCreate}
					onEdit={this.onEdit}
					onDelete={this.onDelete}
				/>
				<TapGrid
					entriesLoader={this.loadEntries} 
					onSelect={this.onSelect} 
				/>
				<TapForm 
					title={FormTitles[this.state.mode]}
					entry={this.state.selectedEntry} 
					enabled={FormEnables[this.state.mode]}
					btnsEnabled={FormButtonsEnables[this.state.mode]}
					onCancel={this.onCancel}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}

}