[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

# {{url}} Login Tests

WebdriverIO test scripts with TravisCI and Visual Regression Testing.

Generated via [testyourlog.in](http://testyourlog.in). Forked from [github.com/klamping/wdio-starter-kit](https://github.com/klamping/wdio-starter-kit)

## Installation

```
npm install
```

## Usage

By default, you can run the tests using the `npm test` command.

You can also lint your code with `npm run lint`.

## Features:

- Login Tests with Page Objects
- [Mocha](http://mochajs.org/)
- [Chai with `expect` global](http://chaijs.com/guide/styles/#expect)
- [Chai WebdriverIO](https://github.com/marcodejongh/chai-webdriverio)
- [Visual Regression Tests](https://github.com/zinserjan/wdio-visual-regression-service)
- [ESLint](http://eslint.org/) using [Semistandard style](https://github.com/Flet/semistandard)
- [WebdriverIO tuned Gitignore file](https://github.com/klamping/wdio-starter-kit/blob/master/.gitignore#L61)

## More Details

### Folder Structure

Tests and page objects go in the `test\` folder.

Name tests with a `.spec.js` extension. For example: `mytest.spec.js`

Name Page Object files with a `.page.js` extention.  For example: `mypageobject.page.js`

Visual regression screenshots will be saved to the `screenshots` folder.

### TravisCI Integration

This kit includes a basic `.travis.yml` file set up to allow easy integration with their service. Simply enable your repo in [TravisCI](https://travis-ci.org/) and you'll get it up and running. And be sure to update the badge information at the top of this file.

### Debug Command Line Flag to adjust timeout

By setting the 'DEBUG' environment variable to true, the test timeout with be essentially removed, allowing you to run [the `debug` command](https://www.youtube.com/watch?v=xWwP-3B_YyE&lc=z12gw1vqpu2sunjeq222hrsxstf3glohh04) without your tests timing out. 

`DEBUG=true npm test`
