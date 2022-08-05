import supertest from 'supertest';
import { prismaMock } from './lib/prisma/client.mock';
import app from './app';

const req = supertest(app);

// GET /watchlist - test for retrieving films' list
describe('GET /watchlist', () => {
	// valid GET request test
	test('Valid request', async () => {
		const list = [
			{
				id: 1,
				filmTitle: 'Inside Llewyin Davis',
				plot: null,
				year: 2013,
				director: 'Joel Coen, Nathan Coen',
				genres: 'black comedy, drama, music',
				watched: true,
				createdAt: '2022-08-04T09:16:00.563Z',
				updatedAt: '2022-08-04T09:15:16.604Z',
			},
			{
				id: 2,
				filmTitle: 'Vengeance',
				plot: 'A writer from New York City attempts to solve the murder of a girl he hooked up with and travels down south to investigate the circumstances of her death and discover what happened to her.',
				year: 2022,
				director: 'B.J. Novak',
				genres: 'comedy, mystery, thriller',
				watched: false,
				createdAt: '2022-08-04T09:16:40.599Z',
				updatedAt: '2022-08-04T09:16:02.208Z',
			},
		];

		// @ts-ignore
		prismaMock.watchlist.findMany.mockResolvedValue(list);

		const res = await req
			.get('/watchlist')
			.expect(200)
			.expect('Content-Type', /application\/json/);

		expect(res.body).toEqual(list);
	});
});

// GET /watchlist/:id - tests for retrieving a specific film
describe('GET /watchlist/:id', () => {
	// valid request
	test('Valid request', async () => {
		const film = [
			{
				id: 2,
				filmTitle: 'Vengeance',
				plot: 'A writer from New York City attempts to solve the murder of a girl he hooked up with and travels down south to investigate the circumstances of her death and discover what happened to her.',
				year: 2022,
				director: 'B.J. Novak',
				genres: 'comedy, mystery, thriller',
				watched: false,
				createdAt: '2022-08-04T09:16:40.599Z',
				updatedAt: '2022-08-04T09:16:02.208Z',
			},
		];

		// @ts-ignore
		prismaMock.watchlist.findUnique.mockResolvedValue(film);

		const res = await req
			.get('/watchlist/1')
			.expect(200)
			.expect('Content-Type', /application\/json/);

		expect(res.body).toEqual(film);
	});

	// film does not exist
	test('Film does not exist', async () => {
		// @ts-ignore
		prismaMock.watchlist.findUnique.mockResolvedValue(null);

		const res = await req
			.get('/watchlist/28')
			.expect(404)
			.expect('Content-Type', /text\/html/);

		expect(res.text).toContain('Cannot GET /watchlist/28');
	});

	// invalid film ID
	test('Invalid film ID', async () => {
		const res = await req
			.get('/watchlist/qwerty')
			.expect(404)
			.expect('Content-Type', /text\/html/);

		expect(res.text).toContain('Cannot GET /watchlist/qwerty');
	});
});

// POST /watchlist - tests for posting a new film resource to the watchlist
describe('POST /watchlist', () => {
	// valid request
	test('Valid request', async () => {
		const film = {
			id: 3,
			filmTitle: 'Whiplash',
			plot: null,
			year: 2014,
			director: 'Damien Chazelle',
			genres: 'psychological drama, music',
			watched: true,
			createdAt: '2022-08-04T18:21:58.870Z',
			updatedAt: '2022-08-04T18:21:58.874Z',
		};

		// @ts-ignore
		prismaMock.watchlist.create.mockResolvedValue(film);

		const res = await req
			.post('/watchlist')
			.send({
				filmTitle: 'Whiplash',
				year: 2014,
				director: 'Damien Chazelle',
				genres: 'psychological drama, music',
				watched: true,
			})
			.expect(201)
			.expect('Content-Type', /application\/json/);

		expect(res.body).toEqual(film);
	});

	// invalid request
	test('Invalid request', async () => {
		const film = {
			year: 2014,
			director: 'Damien Chazelle',
			genres: 'psychological drama, music',
			watched: true,
		};

		const res = await req
			.post('/watchlist')
			.send(film)
			.expect(422)
			.expect('Content-Type', /application\/json/);

		expect(res.body).toEqual({
			errors: {
				body: expect.any(Array),
			},
		});
	});
});

// PUT /watchlist/:id - tests for updating an existing film
describe('PUT /watchlist/:id', () => {
	// valid request
	test('Valid request', async () => {
		const film = {
			id: 2,
			filmTitle: 'Vengeance',
			plot: 'A writer from New York City attempts to solve the murder of a girl he hooked up with and travels down south to investigate the circumstances of her death and discover what happened to her.',
			year: 2022,
			director: 'B.J. Novak',
			genres: 'comedy, mystery, thriller',
			watched: true,
			createdAt: '2022-08-04T09:16:40.599Z',
			updatedAt: '2022-08-04T09:16:02.208Z',
		};

		// @ts-ignore
		prismaMock.watchlist.update.mockResolvedValue(film);

		const res = await req
			.put('/watchlist/2')
			.send({
				filmTitle: 'Vengeance',
				plot: 'A writer from New York City attempts to solve the murder of a girl he hooked up with and travels down south to investigate the circumstances of her death and discover what happened to her.',
				year: 2022,
				director: 'B.J. Novak',
				genres: 'comedy, mystery, thriller',
				watched: true,
			})
			.expect(200)
			.expect('Content-Type', /application\/json/);

		expect(res.body).toEqual(film);
	});

	// film does not exist
	test('Film does not exist', async () => {
		// @ts-ignore
		prismaMock.watchlist.update.mockRejectedValue(
			new Error('Error - Film does not exist')
		);

		const res = await req
			.put('/watchlist/28')
			.send({
				filmTitle: 'Vengeance',
				plot: 'A writer from New York City attempts to solve the murder of a girl he hooked up with and travels down south to investigate the circumstances of her death and discover what happened to her.',
				year: 2022,
				director: 'B.J. Novak',
				genres: 'comedy, mystery, thriller',
				watched: true,
			})
			.expect(404)
			.expect('Content-Type', /text\/html/);

		expect(res.text).toContain('Cannot PUT /watchlist/28');
	});

	// invalid film ID
	test('Invalid film ID', async () => {
		const res = await req
			.put('/watchlist/qwerty')
			.send({
				filmTitle: 'Vengeance',
				watched: true,
			})
			.expect(404)
			.expect('Content-Type', /text\/html/);

		expect(res.text).toContain('Cannot PUT /watchlist/qwerty');
	});
});

// DELETE /watchlist/:id - tests for deleting a film
describe('DELETE /watchlist/:id', () => {
	// valid request
	test('Valid request', async () => {
		const res = await req.delete('/watchlist/1').expect(204);

		expect(res.text).toEqual('');
	});

	// film does not exist
	test('Film does not exist', async () => {
		// @ts-ignore
		prismaMock.watchlist.delete.mockRejectedValue(
			new Error('Error - film does not exist')
		);

		const res = await req
			.delete('/watchlist/28')
			.expect(404)
			.expect('Content-Type', /text\/html/);

		expect(res.text).toContain('Cannot DELETE /watchlist/28');
	});

	// invalid film ID
	test('Invalid film ID', async () => {
		const res = await req
			.delete('/watchlist/qwerty')
			.expect(404)
			.expect('Content-Type', /text\/html/);

		expect(res.text).toContain('Cannot DELETE /watchlist/qwerty');
	});
});
