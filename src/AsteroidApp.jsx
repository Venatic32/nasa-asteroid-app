import { fetchAsteroids } from "./api/nasaApi";
export default function AsteroidApp() {

  fetchAsteroids();
  return (
    <div>AsteroidApp</div>
  )
}
