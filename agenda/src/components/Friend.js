import React from 'react';

class Friend extends React.Component {
	constructor() {
		super();
		this.state = {
			friend: null
		};
	}

	componentDidMount() {
		this.setState({ friend: this.props.friend });
	}

	modify = (e) => {
		e.preventDefault();
		this.props.modify(this.props.friend);
	};

	delete = (e) => {
		e.preventDefault();
		this.props.delete(this.props.friend.id);
	};

	render() {
		return !this.state.friend ? (
			''
		) : (
			<div className="Friend">
				<label>{this.state.friend.fname}</label>
				<label>Age: {this.state.friend.age}</label>
				<input type="email" value={this.state.friend.email} disabled />
				<div>
					<button className='modifyButton' onClick={this.modify}>Modify</button>
					<button className='deleteButton' onClick={this.delete}>Delete</button>
				</div>
			</div>
		);
	}
}

export default Friend;
