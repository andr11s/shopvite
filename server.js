const express = require("express");
const serveStatic = require("serve-static");
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(serveStatic(path.join(__dirname, './dist/shopviteV2')));


app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/shopviteV2/" })
);
 
app.listen(process.env.PORT || 8080);