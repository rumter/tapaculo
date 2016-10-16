export default class TapTitle extends React.Component {
	
	render() {
		return (
			<div className="page-header">
				<div className="row">
					<h1>{this.props.title}</h1>
				</div>
			</div>
		);
	}

}