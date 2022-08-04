import express from 'express';
import 'express-async-errors';

const app = express();

app.get('/watchlist', (req, res) => {
	res.json([
		{
			filmTitle: 'Inside Llewyin Davis',
			year: 2013,
			director: 'Joel Coen, Nathan Coen',
			genres: 'black comedy, drama, music',
			watched: true,
		},
		{
			filmTitle: 'Vengeance',
			year: 2022,
			director: 'B.J. Novak',
			genres: 'comedy, mystery, thriller',
			watched: false,
		},
	]);
});

export default app;
