import { BtnMyLocation } from "../components/BtnMyLocation";
import { MapView } from "../components/MapView";
import { SearchBar } from "../components/SearchBar";

export function HomeScreen (): JSX.Element {

    

  return (
    <div>
        <MapView />
        <BtnMyLocation/>
        <SearchBar/>
    </div>
  )
}
