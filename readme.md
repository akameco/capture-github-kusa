# capture-github-kusa

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/capture-github-kusa.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/akameco/capture-github-kusa.svg?branch=master)](https://travis-ci.org/akameco/capture-github-kusa)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Caputre github kusa


## Install

```
$ npm install capture-github-kusa
```


## Usage

```js
const fs = require('fs');
const captureGithubKusa = require('capture-github-kusa');

captureGithubKusa('akameco').then(img => {
  fs.writeFileSync('github.png', img)
})
```

github.png

<img src="media/github.png"/>

## API

### captureGithubKusa(username)

#### username

Type: `string`

GitHub username.


## License

MIT © [akameco](http://akameco.github.io)
