import React, { useMemo } from "react";
import { Flex, Skeleton, Stack, Text } from "@chakra-ui/react";
import PlaceDetail from "../PlaceDetail";

type PlaceProps = {
  name: string;
}[];

interface ListProps {
  places: PlaceProps;
  isLoading: boolean;
}

const List = ({ isLoading, places }: ListProps) => {
  const LoadingSkeleton = useMemo(
    () => (
      <Stack mt={16}>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    ),
    []
  );

  if (isLoading)
    return (
      <Flex
        direction={"column"}
        bg={"whiteAlpha.900"}
        width={"37vw"}
        height={"100vh"}
        position={"absolute"}
        left={0}
        top={0}
        zIndex={1}
        overflow="hidden"
        px={2}
      >
        {[1, 2, 3, 4, 5].map((_) => LoadingSkeleton)}
      </Flex>
    );

  return (
    <Flex
      direction={"column"}
      bg={"whiteAlpha.900"}
      width={"37vw"}
      height={"100vh"}
      position={"absolute"}
      left={0}
      top={0}
      zIndex={1}
      overflow="hidden"
      px={2}
    >
      <Flex flex={1} overflow={"scroll"} mt={16} direction={"column"}>
        {places &&
          places.map((place: any, index: number) => (
            <PlaceDetail key={index} place={place.attributes} />
          ))}
      </Flex>
    </Flex>
  );
};

export default List;
