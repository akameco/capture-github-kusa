// @flow
const cap = require('.')

const timeout = 10000

test(
  'return beffer',
  async () => {
    const buffer = await cap('akameco')
    expect(Buffer.isBuffer(buffer)).toBe(true)
  },
  timeout
)

test(
  'return beffer',
  async () => {
    expect.assertions(1)
    // $FlowFixMe
    await cap().catch(err => {
      expect(err.message).toBe('required username')
    })
  },
  timeout
)
