import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import logo from "./img/Czechitas-logo.png";
import "leaflet/dist/leaflet.css";
import "./style.css";

//TODO Tady je nutné vložit vlastní API klíč
const MAPY_API_KEY = "ahAolB7WvrXSLG_Vha-Grs3GuMPCSMb7adfhsPSgW9U";
const mapyCzUrl = `https://api.mapy.cz/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${MAPY_API_KEY}`;

const POSITION_CLASSES = {
  bottomleft: "leaflet-bottom leaflet-left",
  bottomright: "leaflet-bottom leaflet-right",
  topleft: "leaflet-top leaflet-left",
  topright: "leaflet-top leaflet-right",
};

const LogoControl = ({ position }) => {
  const positionClass = (position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomleft;
  return (
    <div className={positionClass}>
      <div className="leaflet-control">
        <a href="https://mapy.cz/" target="_blank">
          <img src="https://api.mapy.cz/img/api/logo.svg" />
        </a>
      </div>
    </div>
  );
};

export const HomePage = () => {
  const czechitasPosition = [50.0833886, 14.4252626];
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>React webová aplikace s mapou</h1>
      </header>
      <main>
        <MapContainer center={czechitasPosition} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            minZoom={0}
            maxZoom={19}
            attribution='<a href="https://api.mapy.cz/copyright" target="_blank">© Seznam.cz a.s. a další</a>'
            url={mapyCzUrl}
          />
          <LogoControl />
          <Marker position={czechitasPosition}>
            <Popup>
              <div>
                <img src={logo} alt="Logo Czechitas" width={100} />
              </div>
              Tady se tvoří budoucnost IT.
            </Popup>
          </Marker>
        </MapContainer>
      </main>
      <footer>
        <p>© Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};
