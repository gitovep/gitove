
# gitove

![gitove logo](https://github.com/gitovep/gitove/assets/61370487/e1ce5ef5-0ef5-45ed-8a98-251f8cf33315)

[![Build Status](https://img.shields.io/github/actions/workflow/status/gitovep/gitove/ci.yml?branch=main&style=flat-square)](https://github.com/gitovep/gitove/actions?query=workflow%3ACI+branch%3Amain)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/gitovep/gitove/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/gitove.svg?style=flat-square)](https://www.npmjs.com/package/gitove)
[![npm downloads](https://img.shields.io/npm/dt/gitove.svg?style=flat-square)](https://www.npmjs.com/package/gitove)

An interactive git cli tool for consistant commit messages.




## Getting Started
---
### Install

```
$ npm install -g gitove
$ yarn add -g gitove
$ pnpm add -g gitove
```

### Use Example

```
$ gitove c
```

TODO: use example GIF


## Configuration
---
You can configure your own commit headers by creating `.gitoverc.json`.

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

## Contributing to Gitove
If you want to take part in `gitove`, read the [contribution guide](./docs/CONTRIBUTING.md).

## Code of Conduct
This project has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) 

## License

[MIT license](./LICENSE)