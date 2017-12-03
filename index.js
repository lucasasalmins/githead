var childProcess = require('child_process');

console.log("You launched githead!");

if (getGitHeadArgs().length) {
  eval(getGitHeadArgs()[0])();
} else {
  console.log("You didn't tell githead to do anything!");
}

function getGitHeadArgs() {
  return process.argv.slice(2, process.argv.length);
}

function init() {
  console.log("Your directory is now initialised with git. That means everything in this directory and any sub--directories is being tracked.\nHints:\n> Add a '.gitignore' file to stop certain files from being tracked\n> Add a remote repository on GitHub to share the work in this directory with others.");
  var gitResponse = executeGitCommand();
  console.log(gitResponse);
  return gitResponse;
}

function helpme() {
  console.log("usage: githead [init] [merge] [pull] [add]")
}


function executeGitCommand() {
  var gitCommand = childProcess.spawnSync('git', getGitHeadArgs());
  var gitResponse = gitCommand.stdout.toString() || gitCommand.stderr.toString();
  return gitResponse;
}

module.exports = {
  init: init
};
