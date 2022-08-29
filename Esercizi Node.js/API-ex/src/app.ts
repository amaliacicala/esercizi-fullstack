import express from 'express';
import 'express-async-errors';

import { validationErrorMiddleware } from './lib/middleware/validation';
import { initCorsMiddleware } from './lib/middleware/cors';
import { initSessionMiddleware } from './lib/middleware/session';
import {
	notFoundMiddleware,
	initErrorMiddleware,
} from './lib/middleware/error';

import { passport } from './lib/middleware/passport';

import watchlistRoutes from './routes/watchlist';

const app = express();

// session middleware
app.use(initSessionMiddleware(app.get('env')));
app.use(passport.initialize());
app.use(passport.session());

// parse the req.body into an object
app.use(express.json());

// CORS middleware
app.use(initCorsMiddleware());

app.use('/watchlist', watchlistRoutes);

// login route
app.get('/auth/login', (req, res, next) => {
	if (typeof req.query.redirectTo !== 'string' || !req.query.redirectTo) {
		res.status(400);
		return next('Missing redirectTo query string parameter');
	}

	req.session.redirectTo = req.query.redirectTo;

	res.redirect('/auth/github/login');
});

// auth github login route
app.get(
	'/auth/github/login',
	passport.authenticate('github', {
		scope: ['user:email'],
	})
);

// redirecting to github after login
app.get(
	'/auth/github/callback',
	passport.authenticate('github', {
		failureRedirect: '/auth/github/login',
		keepSessionInfo: true,
	}),
	(req, res) => {
		if (typeof req.session.redirectTo !== 'string') {
			return res.status(500).end();
		}

		res.redirect(req.session.redirectTo);
	}
);

// logout route
app.get('/auth/logout', (req, res, next) => {
	if (typeof req.query.redirectTo !== 'string' || !req.query.redirectTo) {
		res.status(400);
		return next('Missing redirectTo query string parameter');
	}

	const redirectUrl = req.query.redirectTo;

	req.logout((error) => {
		if (error) {
			return next(error);
		}

		res.redirect(redirectUrl);
	});
});

app.use(notFoundMiddleware);

app.use(validationErrorMiddleware);
app.use(initErrorMiddleware(app.get('env')));
export default app;
