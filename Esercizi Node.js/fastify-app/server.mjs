// Use the Fastify framework to create an API with a GET route that sends a simple object as a JSON response.

//--------------

import 'dotenv/config';

// import the factory function that allows to create a new server instance
import Fastify from 'fastify';

// create the server instance and enable the logger
const fastify = Fastify({
	logger: true,
});

// add a GET route (all data is formatted in JSON by default - no need to serialize it)
fastify.get('/', async (request, reply) => {
	reply.send({ data: "Server's up and running with Fastifyyyyy 🏃" });
});

// start the server
try {
	await fastify.listen({ port: process.env.PORT });
} catch (error) {
	// in case of errors occurring when starting the server, log them and exit the process
	fastify.log.error(error);
	process.exit(1);
}
