'use strict'

const request = require('supertest');
const expect = require('chai').expect;

const app = require('../index');

/**
 * Testing  GET /iecho?text=test
 */
describe('/iecho?text=test', () => {
  /**
   * Valida que al no enviar un texto responda con un 400 y con un error: no text
   */
  it('Respond with json containing, {error: no text} with status code 400', async () => {
    const response = await request(app).get('/iecho?text=');

    expect(response.status).to.eql(400);
    expect(response.body).to.eql({
      error: 'no text'
    });
  });

  /**
   * Valida que el endpoint responda con un JSON
   */
  it('Respond with json containing', (done) => {
    request(app)
      .get('/iecho?text=test')
      .expect('Content-type', /json/)
      .expect(200, done);
  });

  /**
   * Valida que el texto enviado no sea un palindromo
   */
  it('Respond with json containing, but with the text is not palindrome', async () => {
    const response = await request(app).get('/iecho?text=test');

    expect(response.status).to.eql(200);
    expect(response.body).to.eql({
      text: 'tset',
      palindrome: false
    });
  });

  /**
   * Valida que el texto enviado sea un palindromo
   */
  it('Respond with json containing, but with the text is palindrome', async () => {
    const response = await request(app).get('/iecho?text=oso');

    expect(response.status).to.eql(200);
    expect(response.body).to.eql({
      text: 'oso',
      palindrome: true
    });
  });
});
