const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer();

const awsServerUrl = 'http://13.230.210.94';

app.all('/*', (req, res) => {
    proxy.web(req, res, { target: awsServerUrl });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Reverse proxy server is running on port ${port}`);
});
