# PatoliyaInfotech Code Standards


## Directory Structure
```
.
├── _angularjs                # Angular JS Documentation
├── _api                      # API Documentation
├── _cleancode                # clean code Documentation
├── _database                 # Database Documentation
├── _includes                 # Template files use by Jekyll
├── _ionic                    # Ionic Documentation
├── _javascript               # Javascript Best Practices Documentation
├── _layouts                  # Template files use by Jekyll
├── _nodejs                   # NodeJs Documentation
├── _php                      # php related Documentation
├── _reactjs                  # ReactJs Documentation
├── _site                     # Public directory rendered by Jekyll
├── assets                    # Contains Styles, Images and SVG
├── angularjs.md              # Angular JS Page
├── api.md                    # API Page
├── cleancode.md              # CleanCode Page
├── database.md               # Database Page
├── ionic.md                  # Ionic Page
├── javascript.md             # Javascript Page
├── nodejs.md                 # NodeJs Page
├── php.md                    # Php Page
├── reactjs.md                # ReactJs Page
├── index.md                  # Main Page of Jekyll
├── config.yml                # Configuration for Jekyll
```

## How to add a style guide?

#### 1.) Got to a directory example `_api` and create a markdown file
```
├── _api                      # API Documentation
│     └── 1_sample.md         # New Documentation
```

#### 2.) On you markdown you need to add a heading or jekyll won't render it, based on layout
we have `api-doc` for API, `database-doc` for Database and `frontend-doc` for Frontend

```markdown
---
layout: api-doc
title: Sample
---

Your Documentation Here

```

#### 3.) Just write the documentation following [markdown](http://assemble.io/docs/Cheatsheet-Markdown.html) convention and your all Set!