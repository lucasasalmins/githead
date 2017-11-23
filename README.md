# githead
###Helpful command line tool that stops you from losing your git.
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


After struggling to get to grips with using Git Hub in a multi-person project, our group decided to come up with a command line tool which would help beginners through all of their git teething issues.

To get this amazing tool simply clone this repository on to your computer.
Navigate into the head of the directory and then run the following command. 
```bash
$ npm install -g 
```

## Using githead

Once you have installed the tool you can call it gloably from any directory on the command line. All you need to do is swap the "git" section of a normal git command with "githead. For example:
* githead init. 
If you type
```bash
$ githead init
```
into the command line. Our tool will take the command and return some helpful information about what "git init" will do to the file you are working in.

```bash
$ Helpful message about how git works
```
It will then ask you if that is what you really want to do. 

```bash
$ Are you sure this is what you want to do?'
```
If are are sure that this is what you mean to do you can choose to git init. However, if you have realised you have made a bit of a cock up, then you can cancel.

