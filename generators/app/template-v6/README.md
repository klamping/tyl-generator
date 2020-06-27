# {{url}} Login Tests

WebdriverIO test scripts for a Site Login

Generated via [testyourlog.in](http://testyourlog.in).

## Installation

```
npm install
```

## Usage

Run the tests using `npm test`.

## Features:

- Login Tests with Page Objects
- [Mocha](http://mochajs.org/)
- [WebdriverIO Expect Assertions](https://webdriver.io/docs/api/expect.html)
- [WebdriverIO tuned Gitignore file](https://github.com/klamping/wdio-starter-kit/blob/master/.gitignore#L61)

## More Details

### Folder Structure

Tests go in the `test\specs` folder.

Page Objects go in the `test\pageObjects` folder.

Name tests with a `.spec.js` extension. For example: `mytest.spec.js`

Name Page Object files with a `.page.js` extention.  For example: `mypageobject.page.js`

### Debug Command Line Flag to adjust timeout

By setting the 'DEBUG' environment variable to true, the test timeout with be essentially removed, allowing you to run [the `debug` command](https://www.youtube.com/watch?v=xWwP-3B_YyE&lc=z12gw1vqpu2sunjeq222hrsxstf3glohh04) without your tests timing out. 

Shell (Linux/OSX):
`DEBUG=true npm test`

Windows Command Line:
`cmd /C "set DEBUG=true && npm test"`

It will also show the browser as it runs (versus running in "headless" mode).
