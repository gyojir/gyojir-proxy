const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');
 
const app = express();

// app.use(['/mangas', '/admin', '/assets'], createProxyMiddleware({
//   target: 'https://gyojir.herokuapp.com',
//   changeOrigin: true
// }));

app.use('/', createProxyMiddleware({
  target: 'https://gyojir.github.io',
  changeOrigin: true
}));

app.get("*", (req, res) => {
  res.sendStatus(200);
});

module.exports = app;

// app.listen(4000);