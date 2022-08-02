import express from 'express';
import 'express-async-errors';

const app = express();

app.get('/fruit', (req, res) => {
	res.json([
		{
			fruit: 'Apple',
			size: 'Medium',
			color: 'Red',
		},
		{
			fruit: 'Blackberry',
			size: 'Small',
			color: 'Purple',
		},
	]);
});

export default app;
