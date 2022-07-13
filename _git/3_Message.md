---
layout: git
title: "Commit Messages"
---

## Always commit with proper message type

- It should be descriptive 
- It should be shorter than 50 characters.
- It should be written in imperative present tense.
- If you use an issue tracker, add a reference(s) to them at the bottom, e.g. Resolve #123; See also: #456, #789

```
# good
$ git commit -m "Add auto login for verified users - Closes BLG-20"

# bad
$ git commit -m "Quick fix"
```

##### A commit messages consists of three distinct parts separated by a blank line: the title, an optional body and an optional footer. The layout looks like this:

```
type: Subject

body

footer
```

#### The type is contained within the title and can be one of these types:

- feat: A new feature
- fix: A bug fix
- docs: Changes to documentation
- style: Formatting, missing semi colons, etc; no code change
- perf: changes that improve performance
- refactor: Refactoring production code
- test: Adding tests, refactoring test
- ci: changes to our CI configuration files and scripts (example scopes: config.yml, CircleCI, ..etc)
- chore: Updating build tasks, package manager configs, etc; no production code change

#### Example Commit Message

```
feat: Summarize changes in around 50 characters or less
```