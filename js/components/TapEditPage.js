import Modes from '../constants/Modes';
import TapTitle from './TapTitle';
import TapGrid from './grid/TapGrid';
import TapForm from './form/TapForm';
import TapToolbar from './TapToolbar';

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
	[Modes.NOT_SELECTED]: "Details",
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
	 * @param props.entriesList
	 * @param props.selectedEntry
	 * @param props.mode
	 * @param props.onSelect
	 */
	constructor(props) {
		super(props);

		this.loadEntries = this.loadEntries.bind(this);
		this.onCreate = this.onCreate.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	loadEntries() {
		return this.props.entriesList;
	}

	onSelect(entry) {
		console.log(entry);
		this.props.onSelect(entry.id);
	}

	onCreate() {
		//this.setState({ selectedEntry: {}, mode: Modes.CREATE });
		console.log("create");
	}

	onEdit() {
		//this.setState({ mode: Modes.EDIT });
		console.log("edit");
	}

	onDelete() {
		console.log("delete");
	}

	onCancel() {
		if (this.state.mode == Modes.CREATE) {
			//this.setState({ mode: Modes.NOT_SELECTED });
		} else if (this.state.mode == Modes.EDIT) {
			//this.setState({ mode: Modes.VIEW_DETAILS });
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
		let mode = this.props.mode;

		return (
			<div>
				<TapTitle title="Edit" />
				<TapToolbar 
					createEnabled={ToolbarEnables[mode].create}
					editEnabled={ToolbarEnables[mode].edit}
					deleteEnabled={ToolbarEnables[mode].delete}
					onCreate={this.onCreate}
					onEdit={this.onEdit}
					onDelete={this.onDelete}
				/>
				<TapGrid
					entriesLoader={this.loadEntries} 
					onSelect={this.onSelect} 
				/>
				<TapForm 
					title={FormTitles[mode]}
					entry={this.props.selectedEntry} 
					enabled={FormEnables[mode]}
					msgForDisabled="Select an entry to view its details."
					btnsEnabled={FormButtonsEnables[mode]}
					onCancel={this.onCancel}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}

}