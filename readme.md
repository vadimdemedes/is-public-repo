# is-public-repo [![Build Status](https://travis-ci.org/vadimdemedes/is-public-repo.svg?branch=master)](https://travis-ci.org/vadimdemedes/is-public-repo)

> Check if GitHub repository is public


## Install

```
$ npm install is-public-repo
```


## Usage

```js
const isPublicRepo = require('is-public-repo');

await isPublicRepo('vadimdemedes/ink');
//=> true
```


## API

### isPublicRepo(url)

#### url

Type: `string`

Repository name (`vadimdemedes/ink`) or URL (`https://github.com/vadimdemedes/ink`).


## License

MIT © [Vadim Demedes](https://github.com/vadimdemedes)
