import { Router } from 'express';
import { passport } from '../lib/middleware/passport';

const router = Router();

// login route
router.get('/login', (req, res, next) => {
	if (typeof req.query.redirectTo !== 'string' || !req.query.redirectTo) {
		res.status(400);
		return next('Missing redirectTo query string parameter');
	}

	req.session.redirectTo = req.query.redirectTo;

	res.redirect('/auth/github/login');
});

// auth github login route
router.get(
	'/auth/github/login',
	passport.authenticate('github', {
		scope: ['user:email'],
	})
);

// redirecting to github after login
router.get(
	'/github/callback',
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
router.get('/logout', (req, res, next) => {
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

export default router;
