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
    "type": [{
        "name": "feat",
        "alias": "feat",
        "descriiption": "Add or imporve feature"
    }],
    "scope": [{
        "name": "article",
        "alias": "article",
        "description": "the article that user writes"
    }],
    "replace": [{
        "name": "broadcast_category",
        "alias": "bc",
        "description": "categories for broadcast"
    }]
}
```