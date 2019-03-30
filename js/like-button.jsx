class LikeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numClick: 0,
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({ numClick: this.state.numClick + 1 });
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>like </button>
				<span> {this.state.numClick}</span>
			</div>
		);
	}
}
