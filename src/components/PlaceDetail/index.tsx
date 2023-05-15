import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

type ImageStructureProps = {
  data: {
    attributes: {
      url: string;
    };
  };
};

type PlaceProps = {
  name: string;
  priceRange: string;
  logo: ImageStructureProps;
};

interface PlaceDetailProps {
  place: PlaceProps;
}

const PlaceDetail = ({ place }: PlaceDetailProps) => {
  return (
    <Flex
      bg={"whiteAlpha.900"}
      px={4}
      py={2}
      mb={2}
      shadow="lg"
      direction={"column"}
      alignItems={"start"}
      justifyContent="space-between"
    >
      <Flex justifyContent={"space-between"} width={"full"}>
        <Flex
          direction={"column"}
          justifyContent={"start"}
          alignItems={"start"}
          width="full"
          px={2}
        >
          <Flex
            alignItems={"center"}
            width={"full"}
            justifyContent={"space-between"}
            p={2}
          >
            <Text
              textTransform={"capitalize"}
              width={"40"}
              fontSize={"lg"}
              fontWeight={"500"}
              isTruncated
            >
              {place.name}
            </Text>

            <Text fontSize={"sm"} fontWeight={"500"} color={"gray.500"}>
              {place.priceRange}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Image
        objectFit={"cover"}
        width={"120px"}
        height={"120px"}
        rounded="lg"
        src={
          place?.logo?.data?.attributes
            ? place?.logo?.data?.attributes?.url
            : "https://img.freepik.com/free-icon/cutlery_318-843858.jpg?w=2000"
        }
        alt={"Logo"}
      />
    </Flex>
  );
};

export default PlaceDetail;
