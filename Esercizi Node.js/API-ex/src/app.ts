import express from 'express';
import 'express-async-errors';

import { validationErrorMiddleware } from './lib/middleware/validation';
import { initCorsMiddleware } from './lib/middleware/cors';
import { initSessionMiddleware } from './lib/middleware/session';
import { passport } from './lib/middleware/passport';

import watchlistRoutes from './routes/watchlist';
import authRoutes from './routes/auth';

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
app.use('/auth', authRoutes);

app.use(validationErrorMiddleware);

export default app;
