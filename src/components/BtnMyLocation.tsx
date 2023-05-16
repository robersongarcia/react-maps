import { useContext } from "react"
import { MapContext } from "../context/map/MapContext"
import { PlacesContext } from "../context/places/PlacesContext"

export function BtnMyLocation (): JSX.Element {

    const {map, isMapReady} = useContext(MapContext)

    const {userLocation} = useContext(PlacesContext)

    const onClick = () => {
        if(!isMapReady) throw new Error('Mapa no esta listo')
        if(!userLocation) throw new Error('No hay ubicación del usuario')

        map?.flyTo({
            center: userLocation,
            zoom: 15
        })

    }

  return (
    <button 
        className="btn btn-primary"
        style={{
            position: 'fixed',
            bottom: 50,
            right: 50,
            zIndex: 999
        }}  
        onClick={onClick}  
    >
        Mi Ubicación
    </button>
  )
}
