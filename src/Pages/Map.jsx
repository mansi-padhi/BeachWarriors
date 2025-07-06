import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import placeholderIcon from "../icons/Placeholder.png";

import {
  JuhuPopup,
  ChowpattyPopup,
  VersovaPopup,
  DadarPopup,
  AksaPopup
} from "../Components/BeachPopups";

const customIcon = new Icon({
  iconUrl: placeholderIcon,
  iconSize: [38, 38],
});

const createClusterCustomIcon = cluster =>
  new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });

const markers = [
  { geocode: [19.0880, 72.8263], PopupComponent: JuhuPopup },
  { geocode: [18.9498, 72.8184], PopupComponent: ChowpattyPopup },
  { geocode: [19.1786, 72.8300], PopupComponent: VersovaPopup },
  { geocode: [19.0172, 72.8487], PopupComponent: DadarPopup },
  { geocode: [19.1900, 72.8211], PopupComponent: AksaPopup },
];

export default function Map() {
  return (
    <MapContainer
      center={[19.0760, 72.8777]}
      zoom={11}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {markers.map(({ geocode, PopupComponent }, index) => (
          <Marker key={index} position={geocode} icon={customIcon}>
            <Popup>
              <PopupComponent />
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
