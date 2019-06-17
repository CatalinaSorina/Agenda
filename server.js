const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 7;

function getNewId() {
	return nextId++;
}

let friends = [
	{
		id: 1,
		fname: 'Sam',
		age: 24,
		email: 'sam@mail.com'
	},
	{
		id: 2,
		fname: 'Mary',
		age: 29,
		email: 'mary@mail.com'
	},
	{
		id: 3,
		fname: 'Michael',
		age: 27,
		email: 'mik@mail.com'
	},
	{
		id: 4,
		fname: 'Ronald',
		age: 30,
		email: 'ron@mail.com'
	},
	{
		id: 5,
		fname: 'Laura',
		age: 21,
		email: 'laura@mail.com'
	}
];

app.use(cors());
app.use(bodyParser.json());

app.get('/friends', (req, res) => {
	res.status(200).json(friends);
});

app.post('/friends', (req, res) => {
	const friend = { id: getNewId(), ...req.body };
	friends = [ ...friends, friend ];
	res.status(201).json(friends);
});

app.put('/friends/:id', (req, res) => {
	const { id } = req.params;
	let friendIndex = friends.findIndex((friend) => friend.id == id);

	if (friendIndex >= 0) {
		friends[friendIndex] = { ...friends[friendIndex], ...req.body };
		res.status(200).json(friends);
	} else {
		res.status(404).json({ message: `The friend with id ${id} does not exist.` });
	}
});

app.delete('/friends/:id', (req, res) => {
	friends = friends.filter((friend) => friend.id != req.params.id);
	res.status(200).json(friends);
});

app.listen(5000, () => {
	console.log('server listening on port 5000');
});
