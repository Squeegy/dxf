import fs from 'fs'
import { join } from 'path'
import { assert } from 'chai'

import { parseString } from '../../src'
const dxfContents = fs.readFileSync(join(__dirname, '/../resources/lines.dxf'), 'utf-8')

describe('header2', () => {
  it('can parse the header', () => {
    const parsed = parseString(dxfContents)
    assert.deepEqual(parsed.header, {
      'extMin': {
        'x': 0,
        'y': 0,
        'z': 0
      },
      'extMax': {
        'x': 100,
        'y': 99.2820323027551,
        'z': 0
      }
    })
  })
})
