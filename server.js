const serverless = require('serverless-http');
const express = require('express');
const { createServer } = require('http');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
server.get('*', (req, res) => {
  return handle(req, res);
});

module.exports.server = serverless(server);
