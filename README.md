# Githead
### _A helpful command line tool that stops you from losing your git._

```
                         (   )
                       (   ) (
                        ) _   )
                         ( \_
                       _(_\ \)_
                     (____\___))
                     ,-      `.
                    /  githead  \
                   | __         |
                    \   \__  -. |
                    ( o( o) 7/ /\
                    /  /     -|/
                    \ (_    /
                    \ --.  /
                    (_____/
```
Our first experiences working on group software projects taught us that not having confidence with git is a major drawback. Establishing a good git workflow is essential and mistakes made can be very costly. We decided to build a command line tool that would help beginners through their teething issues by:
* Providing useful reminders about what certain git commands do
* Asking the user for confirmation before executing a git command

## Instructions
Githead can be installed directly from NPM:

```
$ npm install global npm install githead-helper
```

Or by cloning from GitHub:
```
$ git clone git@github.com:jonsanders101/githead.git
$ cd githead
$ npm install -g
```

## Using Githead

Simply replace 'git' with 'githead' when executing normal git commands. For example:

```
$ githead init
```

Will return the following message:

```
Your directory is now initialised with git. That means everything in this directory and any sub--directories is being tracked.
Hints:

> Add a '.gitignore' file to stop certain files from being tracked
> Add a remote repository on GitHub to share the work in this directory with others.
```


## Currently Available Commands
* git helpme (provides githead usage instructions)
* git init
* git pull
* git merge

## Technologies Used
* Node.js
* Inquirer - command line framework
* Chalk - command line framework

### Testing
* Mocha
* Sinon
* Proxyquire
* Inquirer-test



## ASCII art
Credit for two pieces of ASCII art for our logo is due to:

* [!!!!!Krogg98](http://ascii.co.uk/art/shit)
* [Wny](http://www.chris.com/ascii/index.php?art=people/faces)
