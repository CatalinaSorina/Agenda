import React from 'react';

import './UpdateFriend.css';

class UpdateFriend extends React.Component {
	constructor() {
		super();
		this.state = {
			friend: null
		};
	}

	componentDidMount() {
		this.setState({ friend: this.props.activeFriend });
	}

	addValues = (event) => {
		// console.log(event.target.value);
		const targetName = event.target.name;
		let value = event.target.value;

		if (targetName === 'age') {
			value = Number(value);
		}

		this.setState((previousState) => ({
			friend: {
				...previousState.friend,
				[targetName]: value
			}
		}));
	};

	submitAction = (e) => {
		e.preventDefault();
		this.props.updateFriend(this.state.friend);
	};

	render() {
		return !this.state.friend ? (
			''
		) : (
			<form className="UpdateFriend" onSubmit={this.submitAction}>
				<div>
					<label>Name:</label>
					<input type="text" name="fname" onChange={this.addValues} value={this.state.friend.fname} />
				</div>
				<div>
					<label>Age:</label>
					<input type="number" name="age" onChange={this.addValues} value={this.state.friend.age} />
				</div>
				<div>
					<label>Email:</label>
					<input type="email" name="email" onChange={this.addValues} value={this.state.friend.email} />
				</div>

				<button>Modify friend</button>
			</form>
		);
	}
}

export default UpdateFriend;
