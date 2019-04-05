// TODO figure out why this is required
// (I'm assuming some transpiler magic
// makes this "required")
// eslint-disable-next-line
import React from 'react'
import { addHours, addMinutes } from 'date-fns'

import { computeLightLevel } from './use-sunlight'

const DATE = new Date(2010, 8, 10)
const BC_FERRIES_SCHWARTZ_BAY = {
  latitude: 48.6886,
  longitude: 123.4114,
  loading: false
}

// Test the calculations used in the hook.
// Not sure if it's worth testing the public hook
// API
test('computeLightLevel', () => {
  let max = 0
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      const now = addMinutes(addHours(DATE, hour), minute)
      const r = computeLightLevel(BC_FERRIES_SCHWARTZ_BAY, now)
      expect(r).toMatchSnapshot()
      if (r > max) max = r
    }
  }
  // if we iterate over an
  // entire day (minute by minute),
  // we should see the max solar "height"
  // at some point
  expect(max).toBe(10)
})
