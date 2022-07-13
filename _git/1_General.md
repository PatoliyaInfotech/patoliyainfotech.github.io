---
layout: Basic
title: "Branches"
---

- **[Github Documentation](https://www.javatpoint.com/git)**
- **[Github Tutorial](https://git-scm.com/docs/gittutorial)**
- **[Branching-name-convention](https://dev.to/couchcamote/git-branching-name-convention-cch)**

#### Choose short and descriptive names:

```
# good
$ git checkout -b oauth-migration

# bad
$ git checkout -b login_fix
```

###### Identifiers from corresponding tickets in an external service (eg. a GitHub issue, Jira) are also good candidates for use in branch names.

```
# GitHub issue or jira issue #15
$ git checkout -b issue-15
```


###### Use lowercase in branch names. External ticket identifiers with uppercase letters are a valid exception. Use hyphens to separate words.

```
$ git checkout -b new-feature      # good
$ git checkout -b T321-new-feature # good (Phabricator task id)
$ git checkout -b New_Feature      # bad
```


###### When several people are working on the same feature, it might be convenient to have personal feature branches and a team-wide feature branch. Use the following naming convention:

```
$ git checkout -b feature-a/main # team-wide branch
$ git checkout -b feature-a/maria  # Maria's personal branch
$ git checkout -b feature-a/nick   # Nick's personal branch
```


#### Renames a local branch.

`git branch -m <old-name> <new-name>`

```
git checkout master
git branch -m patch-1 patch-2
# Renames `patch-1` to `patch-2`
``` 