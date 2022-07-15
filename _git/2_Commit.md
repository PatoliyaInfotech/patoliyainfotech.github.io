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