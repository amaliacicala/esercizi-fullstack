import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { initMulterMiddleware } from './lib/middleware/multer';

import prisma from './lib/prisma/client';

import {
	validate,
	filmSchema,
	FilmData,
	validationErrorMiddleware,
} from './lib/validation';

const upload = initMulterMiddleware();

const corsOptions = {
	origin: 'http://localhost:8080',
};

const app = express();

// parse the req.body into an object
app.use(express.json());

// CORS middleware
app.use(cors(corsOptions));

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

// POST /watchlist/:id/photo - upload a poster to a film
app.post(
	'/watchlist/:id(\\d+)/poster',
	upload.single('poster'),
	async (req, res, next) => {
		// if there's no file
		if (!req.file) {
			res.status(400);
			return next('No photo file uploaded.');
		}

		const filmId = Number(req.params.id);
		const posterFilename = req.file.filename;

		try {
			await prisma.watchlist.update({
				where: { id: filmId },
				data: { posterFilename },
			});

			res.status(201).json({ posterFilename });
		} catch (err) {
			res.status(404);
			next(`Cannot POST /watchlist/${filmId}/poster`);
		}
	}
);

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

// DELETE /watchlist/:id - delete a film
app.delete('/watchlist/:id(\\d+)', async (req, res, next) => {
	const filmId = Number(req.params.id);

	try {
		await prisma.watchlist.delete({
			where: { id: filmId },
		});

		res.status(204).end();
	} catch (err) {
		res.status(404);
		next(`Cannot DELETE /watchlist/${filmId}`);
	}
});

// view poster image in browser
app.use('/watchlist/posters', express.static('uploads'));

app.use(validationErrorMiddleware);

export default app;
