import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  Img,
  extendTheme,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  Grid,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Wrap,
  WrapItem,
  Image,
  InputRightElement,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  AlertTitle,
  Alert,
  // Link
} from "@chakra-ui/react";
import { FaUser, FaSearch } from "react-icons/fa";
import { Center, HStack } from "@chakra-ui/layout";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Link from "@frontity/components/link";
import Logo from "../images/logo.png";

export default function MainHeader() {
  const { isOpen, onToggle } = useDisclosure();
  const {
    isOpen: isOpenReportModal,
    onOpen: onOpenReportModal,
    onClose: onCloseReportModal,
  } = useDisclosure();

  const {
    isOpen: isOpendrawer,
    onOpen: onOpendrawer,
    onClose: onClosedrawer,
  } = useDisclosure();

  const firstField = React.useRef();
  const [inputValue, setinputValue] = useState("");
  const [showValue, setshowValue] = useState("Search here");

  // var inputValue = "";

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
  const brandListSubItems = [
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

  const searchSlug = `/searchresult-for/${inputValue}`;
  console.log("always", inputValue);

  const clickSearch = () => {
    let data = $("#input").val();
    alert(data);
  };

  return (
    <Box
      px={{ base: "6", md: "16", lg: "40" }}
      boxShadow={{ base: "lg", md: "none" }}
    >
      <Flex
        color={useColorModeValue("black", "black")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onOpendrawer}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link
              link="/"
              // _focus={{ boxShadow: "none" }}
              // display={{ base: "block", md: "inline-flex" }}
            >
              <Img
                // boxSize="50px"
                objectFit="contain"
                src={Logo}
                w="100% !important"
                h="30px !important"
              />
            </Link>
          </Text>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <HStack spacing="15">
            <Box
              bg="#F3F4F7"
              width="max-content"
              m={3}
              h="50"
              display="flex"
              borderRadius="lg"
              display={{ md: "flex", base: "none" }}
            >
              <InputGroup justifyContent="center" textAlign="center">
                <Center>
                  <Menu>
                    <MenuButton
                      w="32"
                      fontSize="xs"
                      fontFamily="Open Sans"
                      onClick={onOpenReportModal}
                    >
                      All Brands <ChevronDownIcon />
                    </MenuButton>

                    <Modal
                      closeOnOverlayClick={false}
                      isOpen={isOpenReportModal}
                      onClose={onCloseReportModal}
                      size="5xl"
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalCloseButton />
                        <ModalBody py={12}>
                          <InputGroup
                            // placeholder="ok"
                            display={{ base: "block", md: "none" }}
                            color="#9DA7BE"
                            bg="#F2F2F2"
                          >
                            <InputRightElement
                              pointerEvents="visibleFill"
                              children={
                                <Link link={searchSlug}>
                                  <FaSearch
                                    onClick={() => {
                                      setshowValue("Search here");
                                    }}
                                    color="#3E485D"
                                  />
                                </Link>
                                // <Link link={searchSlug}>
                                //   {" "}
                                //   <Icon
                                //     as={FaSearch}
                                //     color="#3E485D"
                                //     boxSize="5"
                                //     color={"black"}
                                //     // onClick={() => onCloseReportModal}
                                //   />
                                // </Link>
                              }
                            />
                            <Input
                              // id="input"
                              type="text"
                              placeholder={showValue}
                              onChange={(event) => {
                                event.preventDefault();
                                setshowValue(event.target.value);
                                // console.log(event.target[0].value);

                                // let result = event.target.value.replace(" ", "-");
                                // var demo = event.target.value;

                                let result = event.target.value
                                  .split(" ")
                                  .join("-");

                                setinputValue(result);
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
                                  <WrapItem>
                                    <Center
                                      onClick={() => {
                                        // console.log("inputdata");
                                        let result = data.replace(" ", "-");
                                        setshowValue(data);

                                        setinputValue(result);
                                        // inputValue = data;
                                        console.log(inputValue);
                                      }}
                                      bg="#F3F4F7"
                                      color="#666666"
                                      fontSize="sm"
                                      px={2}
                                      py={1}
                                      borderRadius="md"
                                      borderRadius="md"
                                      cursor="default"
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
                  </Menu>
                </Center>
                <Box
                  bg="#CDCDCD"
                  width="1px"
                  h="30px"
                  alignSelf="center"
                  mr="4"
                />

                <Center>
                  <Input
                    type="text"
                    fontFamily="Open Sans"
                    border="unset"
                    fontSize="xs"
                    color="#9DA7BE"
                    placeholder={showValue}
                    // value={showValue}
                    onChange={(event) => {
                      event.preventDefault();
                      setshowValue(event.target.value);
                      // console.log(event.target[0].value);

                      // let result = event.target.value.replace(" ", "-");
                      // var demo = event.target.value;

                      let result = event.target.value.split(" ").join("-");

                      setinputValue(result);
                    }}
                    variant="unstyled"
                    w={{ md: "50", lg: "60" }}
                  />
                </Center>
                <Center>
                  <Link link={searchSlug}>
                    <Button
                      bg="#3E485D"
                      colorScheme="#3E485D"
                      color="#FFFFFF"
                      variant="solid"
                      h="50"
                      w="32"
                      _focus={"outline:none;"}
                      // onClick={() => {
                      //   alert("demo");
                      // }}
                    >
                      <Text
                        fontWeight="500"
                        fontSize="xs"
                        onClick={() => {
                          setshowValue("Search here");
                          console.log("clear", showValue);
                        }}
                      >
                        Find Item
                      </Text>
                    </Button>
                  </Link>
                </Center>
              </InputGroup>
            </Box>

            <Text
              _focus={{ boxShadow: "none" }}
              display={{ base: "block", md: "none" }}
            >
              <Icon
                as={FaSearch}
                boxSize="5"
                color={"black"}
                onClick={onOpenReportModal}
              />
            </Text>
          </HStack>
        </Stack>
      </Flex>

      <Flex
        my={8}
        display={{ base: "none", md: "flex" }}
        justifyContent="space-around"
      >
        <DesktopNav />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav isOpendrawer={isOpendrawer} onClosedrawer={onClosedrawer} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack direction={"row"} spacing={4} color="#3E485D">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box fontSize="sm" fontWeight="600">
                <Link
                  p={2}
                  link={navItem.href ?? "#"}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <PopoverBody>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      link={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            fontSize="sm"
            fontWeight="600"
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
          >
            {label}
          </Text>
          {/* <Text fontSize={'sm'}>{subLabel}</Text> */}
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ isOpendrawer, onClosedrawer }) => {
  return (
    <Drawer placement="left" isOpen={isOpendrawer} onClose={onClosedrawer}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <Text
            px={4}
            py={6}
            fontSize="sm"
            fontWeight="400"
            display={{ md: "none" }}
          >
            {NAV_ITEMS.map((navItem) => (
              <MobileNavItem
                key={navItem.label}
                {...navItem}
                onClosedrawer={onClosedrawer}
              />
            ))}
          </Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const MobileNavItem = ({ label, children, href, onClosedrawer }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack onClick={children && onToggle}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Link link={href}>
          {
            <Text
              onClick={onClosedrawer}
              fontWeight={600}
              color={useColorModeValue("gray.600", "gray.200")}
            >
              {label}
            </Text>
          }
        </Link>

        {children && (
          <Link>
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          </Link>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          // mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
          fontSize="sm"
          fontWeight="600"
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} link={child.href}>
                <Text onClick={onClosedrawer}> {child.label}</Text>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Browse all Brand",
    href: "/",
    children: [
      {
        label: "Explore Design Work",
        href: "/sneaker-news",
        // grandchildren: [
        //     {
        //         label: 'all',
        //         href: '#',
        //     },
        //     {
        //         label: 'new',
        //         href: '#',
        //     },
        // ],
      },
      {
        label: "New & Noteworthy",
        href: "#",
      },
    ],
  },
  {
    label: "About us",
    href: "/about",
    children: [
      {
        label: "Job Board",
        href: "#",
      },
      {
        label: "Freelance Projects",
        href: "#",
      },
    ],
  },
  {
    label: " Release Dates",
    href: "/sneaker-release-dates",
  },
  {
    label: "Product",
    href: "/product-salepage/",
  },

  {
    label: "News",
    href: "/sneaker-news",
  },

  {
    label: "Offer & Discount",
    href: "/sneaker-news/category/offer-discount",
  },

  {
    label: "Contact us",
    href: "/contact",
  },
];
