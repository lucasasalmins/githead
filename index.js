var childProcess = require('child_process');

console.log("You launched githead!");

if (getGitHeadArgs().length) {
  eval(getGitHeadArgs()[0])();
} else {
  console.log("You didn't tell githead to do anything!");
}

function getGitHeadArgs () {
  return process.argv.slice(2, process.argv.length);
}

function init () {
  console.log("Helpful message about how git works");
  var gitInit = childProcess.spawnSync('git', getGitHeadArgs());
  var gitResponse = gitInit.stdout.toString() || gitInit.stderr.toString();
  console.log(gitResponse);
  return gitResponse;
}

module.exports = {
  init : init
};
