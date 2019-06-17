import React from 'react';

import './AddFriend.css';

class AddFriend extends React.Component {
	constructor() {
		super();
		this.state = {
			friend: {
				fname: '',
				age: '',
				email: ''
			}
		};
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
		this.props.addFriend(this.state.friend);
	};

	render() {
		return (
			<form className="AddFriend" onSubmit={this.submitAction}>
				<div>
					<label>Name:</label>
					<input
						type="text"
						name="fname"
						onChange={this.addValues}
						placeholder="ex: John"
						// value={this.state.friend.name}
					/>
				</div>
				<div>
					<label>Age:</label>
					<input
						type="number"
						name="age"
						onChange={this.addValues}
						placeholder="ex: 23"
						// value={this.state.friend.age}
					/>
				</div>
				<div>
					<label>Email:</label>
					<input
						type="email"
						name="email"
						onChange={this.addValues}
						placeholder="ex: john23@mail.com"
						// value={this.state.friend.email}
					/>
				</div>

				<button>Add friend</button>
			</form>
		);
	}
}

export default AddFriend;
