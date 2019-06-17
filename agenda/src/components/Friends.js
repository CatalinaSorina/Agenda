import React from 'react';

import Friend from './Friend';
import './Friends.css';

const Friends = (props) => {
	return (
		<div className="FriendList">
			Friends list:
			{props.friends.map((friend) => (
				<Friend key={friend.id} friend={friend} modify={props.modify} delete={props.delete} />
			))}
		</div>
	);
};

export default Friends;
