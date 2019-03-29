import { useState } from 'react'
import { useGeolocation as globalUseGeolocation } from './use-geolocation'
import { useInterval } from './use-interval'
import suncalc from 'suncalc'

export const computeLightLevel = (
  { loading, latitude, longitude },
  date = new Date()
) => {
  if (loading || !latitude || !longitude) return 0
  let { altitude } = suncalc.getPosition(date, latitude, longitude)
  if (altitude < 0) {
    altitude += 2 * Math.PI
  }
  // on or below the horizon is considered "no light"
  if (altitude >= Math.PI) return 0
  // otherwise, return a relative altitude
  // where n is an int in [0,10]
  // and 10 represents the zenith (straight over your head)
  return Math.round(10 * Math.sin(altitude))
}

// make a location hook injectable such that we can test this
export const useSunlight = (useGeolocation = globalUseGeolocation) => {
  const geoLocation = useGeolocation()

  const [lightLevel, setLightLevel] = useState(computeLightLevel(geoLocation))
  useInterval(() => {
    setLightLevel(computeLightLevel(geoLocation))
  }, 1000)
  return [lightLevel]
}
