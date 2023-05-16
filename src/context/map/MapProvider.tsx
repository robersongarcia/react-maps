import { Map, Marker } from "mapbox-gl"
import { MapContext } from "./MapContext"
import { PropsWithChildren, useReducer } from "react"
import { mapReducer } from "./mapReducer"

export interface MapState {
    isMapReady: boolean
    map?: Map
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined
}


export function MapProvider ({children}: PropsWithChildren): JSX.Element {

    
    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE)
    
    const setMap = (map: Map) => {

        new Marker({
            color: '#FAFAFA'
        })
            .setLngLat(map.getCenter())
            .addTo(map)

        dispatch({
            type: 'setMap',
            payload: map
        })
    }

  return (
    <MapContext.Provider value={{
        ...state,

        //methods
        setMap
    }}>
        {children}
    </MapContext.Provider>
  )
}
