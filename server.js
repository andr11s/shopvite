const express = require("express");
const serveStatic = require("serve-static");
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);