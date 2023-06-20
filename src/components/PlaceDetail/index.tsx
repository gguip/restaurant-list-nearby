import React from "react";
import { Rating } from "@smastrom/react-rating";
import { Badge, Flex, Image, Text } from "@chakra-ui/react";

import { IoLocation, IoLogoYoutube } from "react-icons/io5";

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
  foodType: string;
  street: string;
  placeNumber: string;
  neighborhood: string;
  city: string;
  state: string;
  CEP: string;
  videoURL: string;
};

interface PlaceDetailProps {
  place: PlaceProps;
}

type TranslateFoodTypeProps = {
  [key: string]: string;
};

type ConvertFoodPriceProps = {
  [key: string]: string;
};

const ImagePlaceholder =
  "https://img.freepik.com/free-icon/cutlery_318-843858.jpg?w=2000";

const translateFoodType: TranslateFoodTypeProps = {
  Japanese: "Japonês",
  Italian: "Italiano",
  Barbecue: "Churrasco",
  Indian: "Indiana",
};

const convertFoodPrice: ConvertFoodPriceProps = {
  High: "$$$$",
  Medium: "$$$",
  Low: "$$",
};

const PlaceDetail = ({ place }: PlaceDetailProps) => {
  console.log("🚀 ~ file: index.tsx:58 ~ PlaceDetail ~ place:", place);
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
              width={"80%"}
              fontSize={"lg"}
              fontWeight={"500"}
              isTruncated
            >
              {place.name}
              <a href={place.videoURL} target="_blank">
                <IoLogoYoutube color="red" />
              </a>
            </Text>

            <Text fontSize={"sm"} fontWeight={"500"} color={"gray.500"}>
              {convertFoodPrice[place.priceRange]}
            </Text>
          </Flex>

          {/* Ratings */}
          <Flex display={"flex"} p={2} width={"full"}>
            <Rating value={5} readOnly style={{ maxWidth: 100 }} />
          </Flex>

          {/*Open Status*/}
          <Flex fontSize={"sm"} p={2}>
            <Text>{"Aberto"}</Text>
          </Flex>

          <Flex width={"full"} flexWrap={"wrap"}>
            <Badge colorScheme={"teal"} cursor={"pointer"} m={1} fontSize={10}>
              {translateFoodType[place.foodType]}
            </Badge>
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
              : ImagePlaceholder
          }
          alt={"Logo"}
        />
      </Flex>

      <Flex alignItems={"center"} width={"full"} px={1} my={2}>
        <IoLocation fontSize={20} color="gray" />
        <Text
          isTruncated
          fontSize={"small"}
          fontWeight={500}
          color={"gray.700"}
          ml={1}
        >
          {`${place.street}, ${place.placeNumber} - ${place.neighborhood} - ${place.city} - ${place.state} - ${place.CEP}`}
        </Text>
      </Flex>
    </Flex>
  );
};

export default PlaceDetail;
