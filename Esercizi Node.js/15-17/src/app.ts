import express from 'express';
import 'express-async-errors';

import prisma from './lib/prisma/client';

const app = express();

// parse the req.body into an object
app.use(express.json());

// GET /watchlist - retrieve all films in the list
app.get('/watchlist', async (req, res) => {
	const list = await prisma.watchlist.findMany();

	res.json(list);
});

// POST /film - test for posting a new film resource to the watchlist
app.post('/watchlist', async (req, res) => {
	const film = req.body;

	res.status(201).json(film);
});

export default app;
