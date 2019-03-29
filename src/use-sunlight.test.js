import { computeLightLevel } from './use-sunlight'

// Test the calculations used in the hook.
// Not sure if it's worth testing the public hook
// API
test('computeLightLevel', () => {
  expect(
    computeLightLevel({ latitude: 0, longitude: 0, loading: false })
  ).toMatchSnapshot()
})
