"use strict";

(function(){
	var Uglify = require("uglify-js");
	var fs = require("fs");
	var files = ["scripts/site-bundle.js"];
	var result = Uglify.minify(files, {
		mangle: true
	});
	console.log(result.code);
	fs.writeFileSync("scripts/site-min.js", result.code);
})();
