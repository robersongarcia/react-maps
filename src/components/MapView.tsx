import { useContext, useLayoutEffect, useRef } from "react"
import { PlacesContext } from "../context/places/PlacesContext"
import { Loading } from "./Loading"
import mapboxgl from "mapbox-gl"
import { MapContext } from "../context/map/MapContext"

export function MapView (): JSX.Element {

  const mapDiv = useRef<HTMLDivElement>(null)

  const {isLoading, userLocation} = useContext(PlacesContext)
  const {setMap } = useContext(MapContext);

  useLayoutEffect(() => {
    
    if(!isLoading){

      const map = new mapboxgl.Map({
        container: mapDiv.current || '', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        // style: 'mapbox://styles/mapbox/navigation-night-v1',
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
        });

      setMap(map)
    }
    
  }, [isLoading, userLocation])

  if(isLoading) return (<Loading/>)


  return (
    <div 
      ref={mapDiv}
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0
      }}
    >
      {userLocation?.join(',')}
    </div>    
  )
}
