import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";

import { Header, List, Map } from "@/components";
import { getPlacesData } from "./api/restaurants";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: -23.5489,
    lng: -46.6388,
  });
  const [autoCoordinates, setAutoCoordinates] = useState({});
  const [bounds, setBounds] = useState({ ne: null, sw: null });
  const [foodType, setFoodType] = useState("restaurants");
  const [ratings, setRatings] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    /* Get user current location to set initial value */

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setAutoCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData().then((data) => {
      console.log("🚀 ~ file: index.tsx:35 ~ getPlacesData ~ data:", data);
      setPlaces(data);
      setIsLoading(false);
    });
  }, [coordinates, bounds]);

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
      bg={""}
    >
      <Header
        setRatings={setRatings}
        setFoodType={setFoodType}
        setCoordinates={setCoordinates}
      />

      <List places={places} isLoading={isLoading} />

      <Map
        places={places}
        setBounds={setBounds}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
    </Flex>
  );
};

export default Home;
