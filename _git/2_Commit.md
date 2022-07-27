---
layout: Basic
title: "Commits"
---

- Each commit should be a single logical change. Don't make several logical changes in one commit. For example, if a patch fixes a bug and optimizes the performance of a feature, split it into two separate commits.

  <b>Tip</b>: Use `git add -p` to interactively stage specific portions of the modified files.

- Don't split a single logical change into several commits. For example, the implementation of a feature and the corresponding tests should be in the same commit.

- Commit early and often. Small, self-contained commits are easier to understand and revert when something goes wrong.


## Change the last commit's author

Updates the last commit's author without changing its contents.

- Use `git commit --amend` to edit the last commit.

- Use the `--author` option to change the `<name>` and `<email>` of the commit's author.

```shell
git commit --amend --author="<name> <email>"
```

```shell
# Make some changes to files
git add .
git commit --amend --author="Developer Patoliya <developer.patoliya@gmail.com>"
# The last commit's author is now `Developer Patoliya`
```

## Creates a new commit by the specified author.

- Use `git commit -m <message>` to create a new commit with the specified `<message>`.

- Use the `--author` option to change the `<name>` and `<email>` of the commit's author.

```shell
git commit -m <message> --author="<name> <email>"
```

```shell
# Make some changes to files
git add .
git commit -m "Fix the network bug" --author="Duck Quackers <cool.duck@qua.ck>"
# Creates a commit by `Duck Quackers`
```

## Create an empty commit

- Use `git commit --allow-empty -m <message>` to create an empty commit with the provided <message>.

```Shell
git commit --allow-empty -m <message>

git commit --allow-empty -m "Empty commit"
# Creates an empty commit with the message "Empty commit"
```

## Edit the last commit

- Updates the last commit's contents without changing its message.

- Use `git commit --amend --no-edit` to add any staged changes to the last commit, without changing its message.

```shell
git commit --amend --no-edit

Examples
git add .
git commit -m "Fix the network bug"
# Edit or add files

git add .
git commit --amend --no-edit
# The last commit includes the edited/added files
```

## Undo the last commit

- Undoes the last commit without rewriting history.

- Use `git revert HEAD` to revert the last commit, creating a new commit with the inverse of the commit's changes.


```shell
git revert HEAD

Example
git revert HEAD
# Reverts the last commit 

```
## Undo a commit

- Undoes a specified commit without rewriting history.

- Use `git revert <commit>` to revert the specified `<commit>`, creating a new commit with the inverse of the commit's changes.

```shell
git revert <commit>

Example
git revert 3050fc0d3
# Reverts the commit 3050fc0d3

```

## Change the last commit's message

- Updates the last commit's message without changing its contents.

- Use <b>git commit --amend -m message</b> to replace the last commit's message with the new message.

```shell
git commit --amend -m <message>

Example
git add .
git commit -m "Fix the newtork bug"
git commit --amend -m "Fix the network bug"
# The last commit's message is now "Fix the network bug"

```

## Add files to the staging 

- Adds files to the staging area.

- Use `git add <pathspec>` to add files to the staging area.

- `<pathspec>` can be a filename or a fileglob.


```shell
git add <pathspec>


Example
git add "30seconds.txt"
# Add the file `30seconds.txt` to the staging area

git add src/*.json
# Add all files with a `.json` extension in the `src` directory

git add .
# Adds all changes to the staging area

```