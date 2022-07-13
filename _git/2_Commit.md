---
layout: Basic
title: "Commits"
---

- Each commit should be a single logical change. Don't make several logical changes in one commit. For example, if a patch fixes a bug and optimizes the performance of a feature, split it into two separate commits.

 Tip: Use `git add -p` to interactively stage specific portions of the modified files.

- Don't split a single logical change into several commits. For example, the implementation of a feature and the corresponding tests should be in the same commit.

- Commit early and often. Small, self-contained commits are easier to understand and revert when something goes wrong.
