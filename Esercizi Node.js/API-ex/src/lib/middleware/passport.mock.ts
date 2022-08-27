import { RequestHandler } from 'express';

jest.mock('./passport', () => {
	const originalModule = jest.requireActual('./passport');

	const checkAuthorization: RequestHandler = (req, res, next) => {
		next();
	};

	return {
		__esModule: true,
		...originalModule,
		checkAuthorization,
	};
});
