var ghpages = require("gh-pages");

var filePath = "dist/codeine-scene-gh-io"

console.log("Publishing " + filePath + " to branch gh-pages");

ghpages.publish(filePath, function(err){
    console.err("Failed to publish " + filePath + " to branch gh-pages");
    console.err(err);
});