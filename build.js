"use strict";

var path = require("path");
var fs = require("fs");
var browserify = require("browserify");

var testsDir = path.resolve(__dirname, "lib/tests");

var b = browserify();

var testFileNames = fs.readdirSync(testsDir);
testFileNames.forEach(function (testFileName) {
    if (path.extname(testFileName) === ".js") {
        var testFilePath = path.resolve(testsDir, testFileName);
        b.add(testFilePath);
    }
});

b.bundle({ debug: true }).pipe(fs.createWriteStream("bundle.js"));
