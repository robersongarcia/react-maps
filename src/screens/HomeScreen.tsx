import { BtnMyLocation } from "../components/BtnMyLocation";
import { MapView } from "../components/MapView";

export function HomeScreen (): JSX.Element {

    

  return (
    <div>
        <MapView />
        <BtnMyLocation/>
    </div>
  )
}
