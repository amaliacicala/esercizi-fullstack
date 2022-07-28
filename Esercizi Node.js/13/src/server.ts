import 'dotenv/config';
import app from './app';

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Server's running at http://localhost:${port} 🏃`);
});
