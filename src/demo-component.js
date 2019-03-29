import React from 'react'
import { useSunlight } from './use-sunlight'
import colormap from 'colormap'

const mainRange = colormap({
  colormap: 'autumn',
  nshades: 10,
  format: 'hex',
  alpha: 1
})

const backgroundRange = colormap({
  colormap: 'winter',
  nshades: 10,
  format: 'hex',
  alpha: 1
})

const sunlightToTheme = sunlightLevel => ({
  main: mainRange[sunlightLevel],
  background: backgroundRange[sunlightLevel]
})

const sunlightToStyle = theme => ({
  background: theme.background,
  color: theme.main,
  minHeight: '500px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const DemoComponent = ({ children }) => {
  const [sunlight] = useSunlight()
  const theme = sunlightToTheme(sunlight)
  const style = sunlightToStyle(theme)
  return <div style={style}>{children}</div>
}
