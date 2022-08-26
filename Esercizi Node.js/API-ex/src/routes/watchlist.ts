import express, { Router } from "express";
import { initMulterMiddleware } from '../lib/middleware/multer';
import prisma from '../lib/prisma/client';
import {
	validate,
	filmSchema,
	FilmData,
} from '../lib/middleware/validation';

const upload = initMulterMiddleware();

const router = Router();

// GET /watchlist - retrieve all films in the list
router.get('/', async (req, res) => {
	const list = await prisma.watchlist.findMany();

	res.json(list);
});

// GET /watchlist/:id - retrieve a specific film
router.get('/:id(\\d+)', async (req, res, next) => {
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
router.post('/', validate({ body: filmSchema }), async (req, res) => {
	const filmData: FilmData = req.body;

	const film = await prisma.watchlist.create({
		data: filmData,
	});

	res.status(201).json(film);
});

// POST /watchlist/:id/photo - upload a poster to a film
router.post(
	'/:id(\\d+)/poster',
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
router.put(
	'/:id(\\d+)',
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
router.delete('/:id(\\d+)', async (req, res, next) => {
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
router.use('/posters', express.static('uploads'));

export default router;
