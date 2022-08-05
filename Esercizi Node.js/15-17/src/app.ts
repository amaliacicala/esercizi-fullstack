import express from 'express';
import 'express-async-errors';

import prisma from './lib/prisma/client';

import {
	validate,
	filmSchema,
	FilmData,
	validationErrorMiddleware,
} from './lib/validation';

const app = express();

// parse the req.body into an object
app.use(express.json());

// GET /watchlist - retrieve all films in the list
app.get('/watchlist', async (req, res) => {
	const list = await prisma.watchlist.findMany();

	res.json(list);
});

// GET /watchlist/:id - retrieve a specific film
app.get('/watchlist/:id(\\d+)', async (req, res, next) => {
	const filmId = Number(req.params.id);

	const film = await prisma.watchlist.findUnique({
		where: { id: filmId },
	});

	if (!film) {
		res.status(404);
		return next(`Cannot GET /watchlist/${filmId}`);
	}

	res.json(film);
});

// POST /watchlist - post a new film resource to the watchlist
app.post('/watchlist', validate({ body: filmSchema }), async (req, res) => {
	const filmData: FilmData = req.body;

	const film = await prisma.watchlist.create({
		data: filmData,
	});

	res.status(201).json(film);
});

// PUT /watchlist/:id - update an existing film
app.put(
	'/watchlist/:id(\\d+)',
	validate({ body: filmSchema }),
	async (req, res, next) => {
		const filmId = Number(req.params.id);
		const filmData: FilmData = req.body;

		try {
			const film = await prisma.watchlist.update({
				where: { id: filmId },
				data: filmData,
			});

			res.status(200).json(film);
		} catch (error) {
			res.status(404);
			next(`Cannot PUT /watchlist/${filmId}`);
		}
	}
);

app.use(validationErrorMiddleware);

export default app;
