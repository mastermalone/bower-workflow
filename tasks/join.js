"use strict";

(function(){
	var concat = require("concat");
	var files = ["scripts/bower-project.js", "scripts/bower-project2.js"];
	concat(files, "scripts/site-bundle.js", function(error){
		if(error){
			console.log("Ther was an error, code is:", error);
		}else{
			console.log("Success! Joining files", files);
		}
	});
})();
