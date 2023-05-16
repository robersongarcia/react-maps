import { MapProvider } from "./context/map/MapProvider";
import { PlacesProvider } from "./context/places/PlacesProvider";
import { HomeScreen } from "./screens/HomeScreen";

export function MapsApp (): JSX.Element {
  return (
    <MapProvider>
      <PlacesProvider>
        <HomeScreen />
      </PlacesProvider>  
    </MapProvider>
  )
}
