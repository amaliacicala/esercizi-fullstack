import supertest from 'supertest';
import app from '../app';

const req = supertest(app);

// login tests
describe('GET /auth/login', () => {
	test('Valid request', async () => {
		await req
			.get('/auth/login?redirectTo=http://website.com')
			.expect(302)
			.expect('Location', '/auth/github/login')
			.expect('Set-Cookie', /^connect.sid=/)
			.expect('Access-Control-Allow-Origin', 'http://localhost:8080')
			.expect('Access-Control-Allow-Credentials', 'true');
	});

	test('Invalid request', async () => {
		const res = await req
			.get('/auth/login')
			.expect(400)
			.expect('Content-Type', /text\/html/);

		expect(res.text).toContain('Missing redirectTo query string parameter');
	});
});

// logout tests
describe('GET /auth/logout', () => {
	test('Valid request', async () => {
		await req
			.get('/auth/logout?redirectTo=http://website.com')
			.expect(302)
			.expect('Location', 'http://website.com')
			.expect('Access-Control-Allow-Origin', 'http://localhost:8080')
			.expect('Access-Control-Allow-Credentials', 'true');
	});

	test('Invalid request', async () => {
		const res = await req
			.get('/auth/logout')
			.expect(400)
			.expect('Content-Type', /text\/html/);

		expect(res.text).toContain('Missing redirectTo query string parameter');
	});
});

// auth github login tests
describe('GET /auth/github/login', () => {
	test('Valid request', async () => {
		await req
			.get('/auth/github/callback')
			.expect(302)
			.expect('Location', /^https:\/\/github.com\/login\/oauth\/authorize/)
			.expect('Access-Control-Allow-Origin', 'http://localhost:8080')
			.expect('Access-Control-Allow-Credentials', 'true');
	});
});

// auth callback tests
describe('GET /auth/github/callback', () => {
	test('Valid request', async () => {
		await req
			.get('/auth/github/callback')
			.expect(302)
			.expect('Location', /^https:\/\/github.com\/login\/oauth\/authorize/)
			.expect('Access-Control-Allow-Origin', 'http://localhost:8080')
			.expect('Access-Control-Allow-Credentials', 'true');
	});
});
