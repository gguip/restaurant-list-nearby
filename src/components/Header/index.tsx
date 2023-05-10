import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Autocomplete } from "@react-google-maps/api";
import { BiChevronDown, BiRestaurant, BiSearch, BiStar } from "react-icons/bi";
import { Rating } from "primereact/rating";

interface HeaderProps {
  setFoodType: Dispatch<SetStateAction<string>>;
  setRatings: Dispatch<SetStateAction<string>>;
  setCoordinates: Dispatch<
    SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}

const Header = ({ setFoodType, setRatings, setCoordinates }: HeaderProps) => {
  return (
    <Flex
      position={"absolute"}
      top={0}
      left={0}
      width={"full"}
      px={4}
      py={2}
      zIndex={101}
    >
      <Flex>
        {/* <Autocomplete> */}
        <InputGroup width={"35vw"} shadow="lg">
          <InputRightElement pointerEvents={"none"}>
            <BiSearch color="gray" fontSize={20}></BiSearch>
          </InputRightElement>

          <Input
            type={"text"}
            placeholder="Onde comer ?"
            variant={"filled"}
            fontSize={18}
            bg={"white"}
            color={"gray.700"}
            _hover={{ bg: "whiteAlpha.800" }}
            _focus={{ bg: "whiteAlpha.800" }}
            _placeholder={{ color: "gray.700" }}
          />
        </InputGroup>
        {/* </Autocomplete> */}

        <Flex alignItems={"center"} justifyContent={"center"}>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.100" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
          >
            <Menu>
              <BiStar fontSize={25} />
              <MenuButton mx={2} transition="all 0.2s" borderRadius={"md"}>
                Escolha as avaliações
              </MenuButton>

              <MenuList>
                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => setRatings("")}
                >
                  <Text fontSize={20} fontWeight={500} color={"gray.700"}>
                    Todas as avaliações
                  </Text>
                </MenuItem>

                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => setRatings("")}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    2 Estrelas
                  </Text>

                  <Rating
                    value={2}
                    readOnly
                    cancel={false}
                    style={{ display: "flex", color: "#FFCb0c" }}
                  />
                </MenuItem>

                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => setRatings("")}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    3 Estrelas
                  </Text>

                  <Flex display={"flex"} flexDirection={"row"}>
                    <Rating
                      value={3}
                      readOnly
                      cancel={false}
                      style={{ display: "flex", color: "#FFCb0c" }}
                    />
                  </Flex>
                </MenuItem>

                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => setRatings("")}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    4 Estrelas
                  </Text>

                  <Flex display={"flex"} flexDirection={"row"}>
                    <Rating
                      value={4}
                      readOnly
                      cancel={false}
                      style={{ display: "flex", color: "#FFCb0c" }}
                    />
                  </Flex>
                </MenuItem>

                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => setRatings("")}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    5 Estrelas
                  </Text>

                  <Flex display={"flex"} flexDirection={"row"}>
                    <Rating
                      value={5}
                      readOnly
                      cancel={false}
                      style={{ display: "flex", color: "#FFCb0c" }}
                    />
                  </Flex>
                </MenuItem>
              </MenuList>
            </Menu>
            <BiChevronDown fontSize={25} />
          </Flex>

          {/* Restaurants */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.100" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => console.log("clicou")}
          >
            <BiRestaurant fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Restaurantes
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
