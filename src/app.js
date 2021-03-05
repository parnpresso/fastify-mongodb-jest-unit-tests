const fastify = require('fastify');

function build(opts={}) {
  const app = fastify(opts);

  app.get('/', async function (request, reply) {
    return { hello: 'world' };
  });
  app.get('/islands', async (request, reply) => {
    return {};
  });

  return app
}

module.exports = build
