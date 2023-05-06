import { PlacesProvider } from "./context/places/PlacesProvider";
import { HomeScreen } from "./screens/HomeScreen";

export function MapsApp (): JSX.Element {
  return (
    <PlacesProvider>
        <HomeScreen />
    </PlacesProvider>
  )
}
