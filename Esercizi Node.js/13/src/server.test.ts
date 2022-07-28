import supertest from 'supertest';
import app from './app';

const req = supertest(app);

test('GET /fruit', async () => {
	const res = await req
		.get('/fruit')
		.expect(200)
		.expect('Content-Type', /application\/json/);

	expect(res.body).toEqual([
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
