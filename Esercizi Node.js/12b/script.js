const { EventEmitter } = require('node:events');

function createNewsFeed() {
	const emitter = new EventEmitter();

	emitter.on('newsEvent', (newsEvent) => {
		console.log(newsEvent);
	});

	emitter.on('breakingNews', (breakingNews) => {
		console.log(breakingNews);
	});

	emitter.on('error', (error) => {
		console.log(error);
	});

	setInterval(() => {
		emitter.emit('newsEvent', 'News: A thing happened in a place.');
	}, 1000);

	setInterval(() => {
		emitter.emit('breakingNews', 'Breaking news! A BIG thing happened.');
	}, 4000);

	setTimeout(() => {
		emitter.emit('error', new Error('News feed connection error'));
	}, 5000);

	return emitter;
}

const newsFeed = createNewsFeed();
