import express from 'express';
import 'express-async-errors';

import prisma from './lib/prisma/client';

const app = express();

// GET /watchlist - retrieve all films in the list
app.get('/watchlist', async (req, res) => {
	const list = await prisma.watchlist.findMany();

	res.json(list);
});

export default app;
