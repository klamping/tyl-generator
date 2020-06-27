const express = require('express')
const app = express()

const zlib = require('zlib');
const mime = require('mime');
const archiver = require('archiver');

const Scaffold = require('scaffold-generator')
const mustache = require('mustache')
const rimraf = require('rimraf');

const formBody = require('body/form')

app.use(express.static('public'))
app.use('/example', express.static('example'))

app.post('/generator', function (req, res) {
  formBody(req, res, function (err, body) {
    if (err) {
        res.statusCode = 500
        return res.end("NO U")
    }

    // replace any single quotes with double-quotes
    console.log(body);
    body.usernameSelector = body.usernameSelector.replace(/'/g, '"');
    body.passwordSelector = body.passwordSelector.replace(/'/g, '"');
    body.submitSelector = body.submitSelector.replace(/'/g, '"');

    body.validUser = body.validUser.replace(/'/g, "\\'")
    body.validPass = body.validPass.replace(/'/g, "\\'")
    body.invalidUser = body.invalidUser.replace(/'/g, "\\'")

    // delete the existing build directory
    rimraf('./temp', () => {
      generateTemplate(body, res);
    })
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function generateTemplate(body, res) {
  // All variables are HTML-escaped by mustache by default,
  // and `lib/index.js` will be escaped to `lib&#x2F;index.js`.
  // To avoid this, override the `mustache.escape`
  // or triple mustache `{{{name}}}` should be used.
  mustache.escape = v => v;

  let buildDir = './temp/build_' + Date.now();

  new Scaffold({
    data: body,
    render: mustache.render
  })
  .copy('./generators/app/template-v6', buildDir)
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

    var mimetype = mime.getType('.zip');

    res.setHeader('Content-disposition', 'attachment; filename=testyourlogin.zip');
    res.setHeader('Content-type', mimetype);

    // pipe archive data to the file
    archive.pipe(res);

    // append files from a sub-directory, putting its contents at the root of archive
    archive.directory(buildDir, false);

    archive.finalize();
  })
}
