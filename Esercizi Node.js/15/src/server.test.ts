import supertest from 'supertest';
import app from './app';
import { prismaMock } from './lib/prisma/client.mock';

const req = supertest(app);

test('GET /watchlist', async () => {
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
