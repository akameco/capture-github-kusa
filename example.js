// @flow
'use strict'
const fs = require('fs')
const cap = require('.')

cap('akameco').then(buffer => {
  fs.writeFileSync('github.png', buffer)
})
