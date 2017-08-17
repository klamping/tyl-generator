'use strict';
var path = require('path');

var yeomanTest = require('yeoman-test');
// var answers = require('from/some/file.json');

var context = yeomanTest.run(path.resolve('./generators/app/index.js'));
context.settings.tmpdir = false; // don't run in tempdir
context.withOptions({ // execute with options
  'skip-install': true,
  'skip-sdk': true
})
// .withPrompts(answers)  // answer prompts
.on('end', function () {
  // compress file and
});
