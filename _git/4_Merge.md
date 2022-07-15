---
layout: git
title: "Merge a branch"
---

Merges a branch into the current branch.

- Use `git checkout <target-branch>` to switch to the branch into which you want to merge.


- Use `git merge <source-branch>` to merge a branch into the current branch.

```Shell
git checkout <target-branch>
git merge <source-branch>

git checkout master
git merge patch-1 # Merges the `patch-1` branch into `master`

```

