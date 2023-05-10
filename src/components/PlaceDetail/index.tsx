import React from "react";

type PlaceProps = {
  name: string;
};

interface PlaceDetailProps {
  place: PlaceProps;
}

const PlaceDetail = ({ place }: PlaceDetailProps) => {
  return <div>{place.name}</div>;
};

export default PlaceDetail;
