## Configuration Guide

### KeywordConfig

You can set your own message setting by providing `KeywordConfig` to configuration file. `KeywordConfig` looks like below.

```javascript
{
  // the actual message you want it for commit header
  "name": "feat:",

  // an alias to see on header list in cli
  "alias": "feat",

  // a description to see on header list in cli
  "description": "Add new feature."
}
```

The structure of your own config file, `.gitoverc.json` using `KeywordConfig` looks like below.

```javascript
{
  // change default setting of commit "type" header
  // 'string' will use type header like 'feat', 'fix'...
  // 'emoji'  will use type header in emoji 
  "default": "string"|"emoji",

  // custom headers for commit "type" header
  // by setting below, it overwrites default headers
  "type": KeywordConfig[],

  // custom headers for commit "scope" header
  // 'scope' refers to the scope of the commit's work, which can be a domain like 'user', 'post' or a format like 'commit', 'config'
  // customize it to fit your team's conventions 
  "scope": KeywordConfig[],

  // custom keywords for auto replacements
  // You can save aliases for frequently used words.
  // For example, if you alias 'bc' for the long word 'broadcast_category' and write '{bc}' the actual commit message will be written as 'broadcast_category'
  "replace": KeywordConfig[]
}
```

### example

```json
{
    "type": [
      {
        "name": "feat",
        "alias": "feat",
        "description": "Add new feature.",
      },
      {
        "name": "fix",
        "alias": "fix",
        "description": "Fix a bug.",
      },
      {
        "name": "refact",
        "alias": "refact",
        "description": "Refactor code. No business logic change.",
      },
      {
        "name": "design",
        "alias": "design",
        "description": "Add or update UI style.",
      },
      {
        "name": "style",
        "alias": "style",
        "description": "Update in code format, style, etc. No business logic change.",
      },
      {
        "name": "comment",
        "alias": "comment",
        "description": "Add or update annotations.",
      },
      {
        "name": "docs",
        "alias": "docs",
        "description": "Add or update documentation.",
      },
      {
        "name": "test",
        "alias": "test",
        "description": "Add or update tests.",
      },
      {
        "name": "chore",
        "alias": "chore",
        "description": "Add or update build tasks, package manager configs, etc.",
      },
      {
        "name": "init",
        "alias": "init",
        "description": "Initialize project.",
      },
      {
        "name": "rename",
        "alias": "rename",
        "description": "Rename file or directory.",
      },
      {
        "name": "remove",
        "alias": "remove",
        "description": "Remove file or directory.",
      },
      {
        "name": "BREAKING CHANGE",
        "alias": "break",
        "description": "Significant change which is not backward compatible.",
      },
    ],
    "scope": [
      {
        "name": "Config",
        "alias": "config",
        "description": "project configuration commits.",
      },
      {
        "name": "Auth",
        "alias": "auth",
        "description": "Autehntication related commits.",
      },
      {
        "name": "DB",
        "alias": "database",
        "description": "Database related commits.",
      },
      {
        "name": "User",
        "alias": "user",
        "description": "User related commits.",
      },
      {
        "name": "Post",
        "alias": "post",
        "description": "Post related commits.",
      },
      {
        "name": "Comment",
        "alias": "comment",
        "description": "Comment related commits.",
      },
    ],
    "replace": [
      {
        "name": "broadcast_category",
        "alias": "bc",
        "description": "categories for broadcast"
      },
      {
        "name": "Hello",
        "alias": "h",
        "description": "Hello",
      },
      {
        "name": "World",
        "alias": "w",
        "description": "Fix a bug.",
      },
      {
        "name": ":black_cat:",
        "alias": "cat",
        "description": "Black cat 🐈‍⬛",
      },
      {
        "name": "(ENV UPDATED!!)",
        "alias": "env",
        "description": "env updated!!",
      },
    ]
  }
```