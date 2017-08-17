'use strict';
var path = require('path');
var http = require('http');

var zlib = require('zlib');
var mime = require('mime');
var archiver = require('archiver');

const Scaffold = require('scaffold-generator')
const mustache = require('mustache')
const rimraf = require('rimraf');

const fs = require('fs');

var formBody = require("body/form")

let options = {
  url: 'http://testyourlog.in/example/',
  validUser: 'valid@user.com',
  validPass: 'hunter2',
  invalidUser: 'gobledeegook',
  emailSelector: 'input[name="email"]',
  passwordSelector: 'input[name="password"]',
  submitSelector: '*=Login',
  errorSelector: 'E-mail address must be a valid e-mail',
};

function generateTemplate(options, res) {
  // All variables are HTML-escaped by mustache by default,
  // and `lib/index.js` will be escaped to `lib&#x2F;index.js`.
  // To avoid this, override the `mustache.escape`
  // or triple mustache `{{{name}}}` should be used.
  mustache.escape = v => v;

  new Scaffold({
    data: options,
    render: mustache.render
  })
  .copy('./generators/app/templates', './build')
  .then(() => {
    var archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });

    // good practice to catch warnings (ie stat failures and other non-blocking errors)
    archive.on('warning', function(err) {
      if (err.code === 'ENOENT') {
          // log warning
      } else {
          // throw error
          throw err;
      }
    });

    // good practice to catch this error explicitly
    archive.on('error', function(err) {
      throw err;
    });

    var mimetype = mime.lookup('.zip');

    res.setHeader('Content-disposition', 'attachment; filename=testyourlogin.zip');
    res.setHeader('Content-type', mimetype);

    // pipe archive data to the file
    archive.pipe(res);

    // append files from a sub-directory, putting its contents at the root of archive
    archive.directory('build/', false);

    archive.finalize();
  })
}

var server = http.createServer(function(req, res) {
  var uri = url.parse(req.url).pathname;
  var filePath = req.url;
  if  (filePath == 'generate') {
    formBody(req, res, function (err, body) {
      if (err) {
          res.statusCode = 500
          return res.end("NO U")
      }

      // delete the existing build directory
      rimraf('./build', () => {
        generateTemplate(body, res);
      })
    });
  } else {
    var filename = path.join(process.cwd(), uri);
    path.exists(filename, function(exists) {
        if(!exists) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('404 Not Found\n');
            res.end();
            return;
        }
        var mimeType = mime.lookup(filename);
        res.writeHead(200, {'Content-Type':mimeType});

        fs.createReadStream(filename).pipe(res);
    });
  }

}).listen(8000);
