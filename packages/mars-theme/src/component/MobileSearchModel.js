import {
  Text,
  useDisclosure,
  Input,
  InputGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Wrap,
  WrapItem,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import { Center, HStack } from "@chakra-ui/layout";
import { connect } from "frontity";

const MobileSearchModel = ({
  isOpenModal,
  onCloseModal,
  state,
  actions,
  libraries,
  //   handleSubmit,
}) => {
  const firstField = React.useRef();
  const [inputValue, setinputValue] = useState(" ");
  const [showValue, setshowValue] = useState("Search here.");
  const [headerValue, setheaderValue] = useState(" ");

  // const {
  //     isOpen: isOpenModal,
  //     onOpen: onOpenModal,
  //     onClose: onCloseModal,
  // } = useDisclosure();

  const brandList = [
    "nike",
    "puma",
    "adidas",
    "campus",
    "jordan",
    "asics",
    "rebok",
    "convoy",
    "Adida Trainer",
  ];
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the input's value
    const searchString = inputValue.trim();
    // inputRef.current.value;
    console.log("checksearc=", searchString);

    // If the typed search string is not empty
    // Better to trim write spaces as well
    if (searchString.trim().length > 0) {
      // Let's go search for blogs that match the search string

      let finalString = searchString.split(" ").join("+");
      actions.router.set(`/?s=${finalString.toLowerCase()}`);
      // inputRef.current.value = "";
      setinputValue("");
      setshowValue("Search here");

      // Scroll the page to the top
      window.scrollTo(0, 0);

      // Close the search modal
      // closeSearchModal();
    }
  };
  return (
    <div>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpenModal}
        onClose={onCloseModal}
        size="5xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody py={12}>
            <InputGroup
              // display={{ base: "block", md: "none" }}
              color="#9DA7BE"
              bg="#F2F2F2"
            >
              <InputRightElement
                pointerEvents="visibleFill"
                children={
                  // <Link link={searchSlug}>
                  //    onCloseModal();
                  <FaSearch
                    onClick={(e) => {
                      onCloseModal();
                      handleSubmit(e);

                      //
                    }}
                    color="#3E485D"
                  />
                  // </Link>
                  // <FaSearch color="#3E485D" />
                }
              />
              <Input
                // id="input"
                type="text"
                placeholder={showValue}
                value={inputValue}
                onChange={(event) => {
                  event.preventDefault();
                  setshowValue(event.target.value);
                  setinputValue(event.target.value);
                }}
                minW="100%"
                w="auto"
                fontSize="xs"
                color="#9DA7BE"
              />
            </InputGroup>

            <HStack
              flexDirection={{ base: "column", md: "row" }}
              alignItems={{ base: "flex-start", md: "baseline" }}
              mt={4}
            >
              <Text
                color="#666666"
                fontWeight="bold"
                fontSize="sm"
                mr={5}
                mb={2}
              >
                Related Search
              </Text>
              <Wrap direction="row" ml="0px !important">
                {brandList.map((data, index) => {
                  return (
                    <WrapItem key={"mobileSearchModalElement" + index}>
                      <Center
                        onClick={() => {
                          setshowValue(data);
                          setinputValue(data);
                        }}
                        bg="#F3F4F7"
                        color="#666666"
                        fontSize="sm"
                        px={2}
                        py={1}
                        borderRadius="md"
                        borderRadius="md"
                      >
                        {data}
                      </Center>
                    </WrapItem>
                  );
                })}
              </Wrap>
            </HStack>

            {/* <Grid
                                                        templateColumns={{
                                                            md: "5fr 3fr 3fr",
                                                            sm: "repeat(3, 1fr)",
                                                        }}
                                                        gap={6}
                                                        mt={5}
                                                    >
                                                        <Box w="100%" bg="grey.500">
                                                            <Stack direction="column">
                                                                <Heading
                                                                    fontSize="sm"
                                                                    fontWeight="bold"
                                                                    color="#3E485D"
                                                                    mb={2}
                                                                >
                                                                    Brand Names
                                                                </Heading>

                                                                <Grid
                                                                    templateColumns={{
                                                                        md: "2fr 4fr  ",
                                                                        base: "repeat(2, 1fr)",
                                                                    }}
                                                                    gap={2}
                                                                >
                                                                    <Box
                                                                        pr="6"
                                                                        borderRight="1px"
                                                                        borderColor="blackAlpha.400"
                                                                    >
                                                                        {brandList.map((data) => {
                                                                            return (
                                                                                <Box>
                                                                                    <Text fontSize="xs" color="#666666">
                                                                                        {data}
                                                                                    </Text>
                                                                                </Box>
                                                                            );
                                                                        })}
                                                                    </Box>
                                                                    <Box
                                                                        display="flex"
                                                                        justifyContent="space-around"
                                                                    >
                                                                        <Box>
                                                                            {brandListSubItems.map((data, index) => {
                                                                                return (
                                                                                    <Box>
                                                                                        <Text color="#666666" fontSize="xs">
                                                                                            {data}
                                                                                        </Text>
                                                                                    </Box>
                                                                                );
                                                                            })}
                                                                        </Box>

                                                                        <Box ml={5}>
                                                                            {brandListSubItems.map((data, index) => {
                                                                                return (
                                                                                    <Box>
                                                                                        <Text color="#666666" fontSize="xs">
                                                                                            {data}
                                                                                        </Text>
                                                                                    </Box>
                                                                                );
                                                                            })}
                                                                        </Box>
                                                                    </Box>
                                                                </Grid>
                                                            </Stack>
                                                        </Box>
                                                        <Box w="100%">
                                                            <Stack direction="column">
                                                                <Heading
                                                                    fontSize="sm"
                                                                    fontWeight="bold"
                                                                    color="#3E485D"
                                                                    mb={2}
                                                                >
                                                                    New Release
                                                                </Heading>

                                                                {brandList.slice(0, 6).map((data) => {
                                                                    return (
                                                                        <Stack direction="row" mb="15px !important">
                                                                            <Image
                                                                                // w="70px"
                                                                                h="40px"
                                                                                borderRadius="md"
                                                                                objectFit="cover"
                                                                                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/Rectangle-438sd-1.png"
                                                                                alt="Segun Adebayo"
                                                                            />
                                                                            <Stack direction="column">
                                                                                <Text color="#525F7A" fontSize="xs">
                                                                                    Air Jordan 1 mid Orange D-32476247
                                                                                    GT-46374587
                                                                                </Text>
                                                                            </Stack>
                                                                        </Stack>
                                                                    );
                                                                })}
                                                                <Box>
                                                                    <Button variant="outline" size="sm">
                                                                        <Text fontWeight="normal" fontSize="12px">
                                                                            View All
                                                                        </Text>
                                                                    </Button>
                                                                </Box>
                                                            </Stack>
                                                        </Box>
                                                        <Box w="100%">
                                                            <Stack direction="column">
                                                                <Heading
                                                                    fontSize="sm"
                                                                    fontWeight="bold"
                                                                    color="#3E485D"
                                                                    mb={2}
                                                                >
                                                                    Cooming Soon
                                                                </Heading>
                                                                {brandList.slice(0, 6).map((data) => {
                                                                    return (
                                                                        <Stack direction="row" mb="15px !important">
                                                                            <Image
                                                                                // w="70px"
                                                                                h="40px"
                                                                                borderRadius="md"
                                                                                objectFit="cover"
                                                                                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/Rectangle-438h.png"
                                                                            />
                                                                            <Stack direction="column">
                                                                                <Text color="#525F7A" fontSize="xs">
                                                                                    Air Jordan 1 mid Orange D-32476247
                                                                                    GT-46374587
                                                                                </Text>
                                                                            </Stack>
                                                                        </Stack>
                                                                    );
                                                                })}

                                                                <Box>
                                                                    <Button variant="outline" size="sm">
                                                                        <Text fontWeight="normal" fontSize="12px">
                                                                            View All
                                                                        </Text>
                                                                    </Button>
                                                                </Box>
                                                            </Stack>
                                                        </Box>
                                                    </Grid> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default connect(MobileSearchModel);
