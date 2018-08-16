// https://codeforgeek.com/2015/01/render-html-file-expressjs/
var express = require("express");
var expressApp = express();
var axios = require("axios");
const port = 3005;
const urlArray = [ 'https://github.com/MichaelDimmitt/gh_reveal/commit/03b735983ad0b05d3f66f908b2ffda47012b16e8' ]

async function server() {
  rootRoute(expressApp)
  portNum(expressApp)
}
server();

function rootRoute(app){
  app.get('/', async function(req,res) {
    const networkRequest = axios.get(urlArray[0]);
    foo(await networkRequest);
    res.send(`
      <html><body><h1>My Server</h1></body></html>
      ${(await networkRequest).data}`
    )
  });
}

function portNum(app){
  app.listen(port);
  console.log("Running at Port", port);
}

function foo({data}) {
  console.log('DATA',data,'DATA');
}