var ghpages = require("gh-pages");

var filePath = "dist/codeine-scene-gh-io"

var options = {
    branch: "master"
};

console.log("Publishing " + filePath + " to branch " + options.branch);

ghpages.publish(filePath, options, function(err){
    console.err("Failed to publish " + filePath);
    console.err(err);
});