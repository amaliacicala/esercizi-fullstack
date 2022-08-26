import express from 'express';
import 'express-async-errors';
import { validationErrorMiddleware } from './lib/middleware/validation';
import watchlistRoutes from "./routes/watchlist";
import { initCorsMiddleware } from './lib/middleware/cors';

const app = express();

// parse the req.body into an object
app.use(express.json());

// CORS middleware
app.use(initCorsMiddleware());

app.use("/watchlist", watchlistRoutes);

app.use(validationErrorMiddleware);

export default app;
