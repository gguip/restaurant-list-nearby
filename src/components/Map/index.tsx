import React, { Dispatch, SetStateAction } from "react";
import { Box } from "@chakra-ui/react";
import GoogleMap from "google-map-react";
import { IoLocation } from "react-icons/io5";

import { PlaceProps } from "../List";

const GoogleApiKey = process.env.NEXT_PUBLIC_OPEN_GOOGLE_MAP_API_KEY;

type CoordinateProps = {
  lat: number;
  lng: number;
};

interface MapProps {
  places: PlaceProps;
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

const Map = ({ places, coordinates, setCoordinates, setBounds }: MapProps) => {
  console.log("🚀 ~ file: index.tsx:33 ~ Map ~ places:", places);
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
        onChildClick={(child) => console.log("child", child)}
      >
        {places?.map((place, index) => (
          <Box
            key={index}
            lat={Number(place.attributes.latitude)}
            lng={Number(place.attributes.longitude)}
            position={"relative"}
            cursor="pointer"
          >
            <IoLocation color="red" fontSize={30} />
          </Box>
        ))}
      </GoogleMap>
    </Box>
  );
};

export default Map;
