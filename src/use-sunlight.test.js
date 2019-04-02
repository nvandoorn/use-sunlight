import { computeLightLevel } from './use-sunlight'
// TODO figure out why this is required
// (I'm assuming some transpiler magic
// makes this "required")
// eslint-disable-next-line
import React from 'react'

// Test the calculations used in the hook.
// Not sure if it's worth testing the public hook
// API
test('computeLightLevel', () => {
  expect(
    computeLightLevel({ latitude: 0, longitude: 0, loading: false })
  ).toMatchSnapshot()
})
