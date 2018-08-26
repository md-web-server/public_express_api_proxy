  var app = require("express")();
  var axios = require("axios");
  const port = 3005;

  app.listen(port)
  console.log("Running at Port", port)

  // '/https://*' is the example, do not implement will cause duplicate request.
  // app.get('/https://*', function(req,res) {
  //   accessExternalWebsite(req,res)
  // }); 
  app.get('/https://github.com/*', function(req,res) {
    return makeRequest(req, res)
      .catch((e) => console.log('error: ' + e))
  });
  app.get('/https://ctftime.org/*', function(req,res) {
    return makeRequest(req, res)
      .catch((e) => console.log('error: ' + e))
  });
  app.get('/https://facebook.com/*', function(req,res) {
    return makeRequest(req, res)
      .catch((e) => console.log('error: ' + e))
  });
  app.get('/https://twitter.com/*', function(req,res) {
    return makeRequest(req, res)
    .catch((e) => console.log('error: ' + e))
  }); 

  async function makeRequest(req, res){
    const url = buildURL(req)
    const networkRequest = axios.get(url)
    return res.send(`${(await networkRequest).data}`)
  }

  function buildURL(req){
    // strip the '/' that comes with a local host request 
    // and surround the url string with single quotes.
    return req.url.substring(1)
  }