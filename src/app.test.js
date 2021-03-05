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

describe('Endpoint: /islands', () => {
  const app = build();

  it('should response a islands data', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/islands'
    })
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(JSON.stringify([{ "name": "Phi Phi Island" }]));
  });
});
