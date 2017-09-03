// @flow
'use strict'
const cap = require('capture-element')

module.exports = (username /* : string */) => {
  if (!username) {
    return Promise.reject(new Error('required username'))
  }
  return cap('https://github.com/akameco', '.js-calendar-graph')
}
