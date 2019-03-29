# useSunlight

A React hook for the current level of sunlight on an integer scale from `[0,10]`. Solar altitudes in the range `[0, PI]` are mapped to their height above the horizon on the unit circle (scaled up by 10), and all range below the horizon (`[PI, 2PI]`) are mapped to zero.

## Demo

[https://jolly-nobel-4ebf9d.netlify.com](https://jolly-nobel-4ebf9d.netlify.com)

## Usage

```javascript
// src/demo-component.js
export const DemoComponent = ({ children }) => {
  const [sunlight] = useSunlight()
  const theme = sunlightToTheme(sunlight)
  const style = sunlightToStyle(theme)
  return <div style={style}>{children}</div>
}
```
