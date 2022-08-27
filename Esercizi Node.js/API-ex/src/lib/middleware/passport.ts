import passport from 'passport';
import passportGitHub2 from 'passport-github2';
import { RequestHandler } from 'express';

import config from '../../config';

const githubStrategy = new passportGitHub2.Strategy(
	{
		clientID: config.GITHUB_CLIENT_ID,
		clientSecret: config.GITHUB_CLIENT_SECRET,
		callbackURL: config.GITHUB_CALLBACK_URL,
	},
	function (
		accessToken: string,
		refreshToken: string,
		profile: { [key: string]: string },
		done: (error: null, user: Express.User) => void
	) {
		const user: Express.User = {
			username: profile.username,
		};

		done(null, user);
	}
);

passport.use(githubStrategy);

// take the user data and store it in the session
passport.serializeUser<Express.User>((user, done) => done(null, user));

// retrieve the user data from the session
passport.deserializeUser<Express.User>((user, done) => done(null, user));

const checkAuthorization: RequestHandler = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}

	res.status(401).end();
};

export { passport, checkAuthorization };
