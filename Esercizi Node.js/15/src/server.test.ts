import supertest from 'supertest';
import app from './app';

const req = supertest(app);

test('GET /watchlist', async () => {
	const res = await req
		.get('/watchlist')
		.expect(200)
		.expect('Content-Type', /application\/json/);

	expect(res.body).toEqual([
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
