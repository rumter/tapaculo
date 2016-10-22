export default class TapToolbar extends React.Component {

	/**
	 * @param props.createEnabled
	 * @param props.editEnabled
	 * @param props.deleteEnabled
	 * @param props.onCreate
	 * @param props.onEdit
	 * @param props.onDelete
	 */
	constructor(props) {
		super(props);

		this.onCreate = this.onCreate.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	getBtnCreateStyleClasses() {
		let styleClasses = ["btn", "btn-success"];

		if (! this.props.createEnabled) {
			styleClasses.push("disabled");
		}

		return styleClasses.join(" ");
	}

	getBtnEditStyleClasses() {
		let styleClasses = ["btn", "btn-primary"];

		if (! this.props.editEnabled) {
			styleClasses.push("disabled");
		}

		return styleClasses.join(" ");
	}

	getBtnDeleteStyleClasses() {
		let styleClasses = ["btn", "btn-danger"];

		if (! this.props.deleteEnabled) {
			styleClasses.push("disabled");
		}

		return styleClasses.join(" ");
	}

	onCreate(event) {
		event.preventDefault();
		
		if (! this.props.createEnabled) {
			console.error("create btn disabled");
			return;
		}

		this.props.onCreate();
	}

	onEdit(event) {
		event.preventDefault();

		if (! this.props.editEnabled) {
			console.error("edit btn disabled");
			return;
		}

		this.props.onEdit();
	}

	onDelete(event) {
		event.preventDefault();

		if (! this.props.deleteEnabled) {
			console.error("delete btn disabled");
			return;
		}

		this.props.onDelete();
	}
	
	render() {
		return (
			<div className="row">
				<div className="btn-toolbar">
					<button type="button" className={this.getBtnCreateStyleClasses()} onClick={this.onCreate}>
						<span className="glyphicon glyphicon-plus"></span> Create
					</button>
					<button type="button" className={this.getBtnEditStyleClasses()} onClick={this.onEdit}>
						<span className="glyphicon glyphicon-pencil"></span> Edit
					</button>
					<button type="button" className={this.getBtnDeleteStyleClasses()} onClick={this.onDelete}>
						<span className="glyphicon glyphicon-trash"></span> Delete
					</button>
				</div>
			</div>
		);
	}

}