var ghpages = require("gh-pages");

var filePath = "dist/codeine-scene-gh-io"

var options = {
    branch: "master",
    repo: "https://github.com/CodeineScene/CodeineScene.github.io.git"
};

console.log("Publishing " + filePath + " to branch " + options.branch);

ghpages.publish(filePath, options, function(err){
    if (!!err) {    
        console.error("Failed to publish " + filePath);
        console.error(err);
    }
});
