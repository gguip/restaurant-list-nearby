import React, { Dispatch, SetStateAction } from "react";
import { Box } from "@chakra-ui/react";
import GoogleMap from "google-map-react";

const GoogleApiKey = process.env.NEXT_PUBLIC_OPEN_GOOGLE_MAP_API_KEY;

type CoordinateProps = {
  lat: number;
  lng: number;
};

interface MapProps {
  coordinates: CoordinateProps;
  setBounds: Dispatch<
    SetStateAction<{
      ne: null;
      sw: null;
    }>
  >;
  setCoordinates: Dispatch<
    SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}

const Map = ({ coordinates, setCoordinates, setBounds }: MapProps) => {
  console.log("🚀 ~ file: index.tsx:15 ~ Map ~ coordinates:", setCoordinates);
  return (
    <Box width={"full"} height={"full"}>
      <GoogleMap
        bootstrapURLKeys={{ key: GoogleApiKey ?? "" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={undefined}
        onChange={(event: any) => {
          setCoordinates({ lat: event.center.lat, lng: event.center.lng });
          setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw });
        }}
        onChildClick={() => console.log("child")}
      ></GoogleMap>
    </Box>
  );
};

export default Map;
