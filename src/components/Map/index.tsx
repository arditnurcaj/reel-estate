import { useRef, useState } from "react";
import Link from "next/link";
import { Image } from "cloudinary-react";
import ReactMapGL, { MapRef, Marker, Popup, ViewState } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface IProps {}

const Map = ({}: IProps) => {
  const mapRef = useRef<MapRef | null>(null);
  const [viewport, setViewport] = useState<ViewState>({
    latitude: 42.6629,
    longitude: 21.1655,
    zoom: 10,
  });

  return (
    <div className="text-black relative">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="calc(100vh - 64px)"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        onViewportChange={(nextViewport: ViewState) =>
          setViewport(nextViewport)
        }
        ref={(instance) => (mapRef.current = instance)}
        minZoom={5}
        maxZoom={15}
        mapStyle="mapbox://styles/leighhalliday/ckhjaksxg0x2v19s1ovps41ef"
      ></ReactMapGL>
    </div>
  );
};

export default Map;
