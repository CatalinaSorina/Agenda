import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';
import UpdateFriend from './components/UpdateFriend';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			friends: [],
			activeFriend: null
		};
	}

	componentDidMount = () => {
		axios
			.get('http://localhost:5000/friends')
			.then((result) => {
				// console.log(result);
				this.setState({ friends: result.data });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	addFriend = (friend) => {
		axios
			.post('http://localhost:5000/friends', friend)
			.then((result) => {
				this.setState({ friends: result.data });
				this.props.history.push('/friends');
			})
			.catch((error) => console.log(error));
		console.log(`you added ${friend.fname}`);
	};

	delete = (id) => {
		axios
			.delete(`http://localhost:5000/friends/${id}`)
			.then((result) => {
				this.setState({ friends: result.data });
				this.props.history.push('/friends');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	modify = (friend) => {
		this.setState({ activeFriend: friend });
		this.props.history.push('/update-friend');
	};

	updateFriend = (friend) => {
		axios
			.put(`http://localhost:5000/friends/${friend.id}`, friend)
			.then((result) => {
				this.setState({ friends: result.data });
				this.props.history.push('/friends');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		return (
			<div className="App">
				<div>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/friends">Friend list</NavLink>
					<NavLink to="/add-friend">Add friend</NavLink>
				</div>

				<Route
					exact
					path="/friends"
					render={(props) => (
						<Friends friends={this.state.friends} modify={this.modify} delete={this.delete} />
					)}
				/>
				<Route exact path="/add-friend" render={(props) => <AddFriend addFriend={this.addFriend} />} />
				<Route
					exact
					path="/update-friend"
					render={(props) => (
						<UpdateFriend updateFriend={this.updateFriend} activeFriend={this.state.activeFriend} />
					)}
				/>
			</div>
		);
	}
}

export default App;
