import { useContext } from "react"
import { PlacesContext } from "../context/places/PlacesContext"
import { Loading } from "./Loading"

export function MapView (): JSX.Element {

  const {isLoading, userLocation} = useContext(PlacesContext)

  if(isLoading) return (<Loading/>)

  return (
    <div>{userLocation?.join(',')}</div>    
  )
}
