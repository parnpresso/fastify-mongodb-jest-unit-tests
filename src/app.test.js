const build = require('./app');

describe('Endpoint: /', () => {
  const app = build();

  it('should response a hello world message', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/'
    })
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(JSON.stringify({ "hello": "world" }));
  });
});
