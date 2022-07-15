---
layout: git
title: "Delete a branch"
---

### Deletes a local branch.

- Use `git branch -d <branch>` to delete the specified local `<branch>`.


```Shell
git branch -d <branch>


git checkout master
git branch -d patch-1 # Deletes the `patch-1` local branch


```

### Delete merged branches

- Deletes all local merged branches.

- Use `git branch --merged <branch>` to list all branches merged into `<branch>`.

- Use the pipe operator `(|)` to pipe the output and `grep -v "(^\*|<branch>)"` to exclude the current and the target `<branch>`.

- Use the pipe operator `(|)` to pipe the output and `xargs git branch -d` to delete all of the found branches.


```Shell
git branch --merged <branch> | grep -v "(^\*|<branch>)" | xargs git branch -d

### Example

git checkout master
git branch
# master
# patch-1
# patch-2

# Assuming `patch-1` is merged into master
git branch --merged master | grep -v "(^\*|master)" | xargs git branch -d


git branch

# master
# patch-2

```