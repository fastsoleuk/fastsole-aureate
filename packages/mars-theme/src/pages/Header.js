import React, { useState, useEffect, createContext, useContext } from "react";
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
import MobileMultiMenus from "../component/Mobile-Multi-Menu";
import DeskMultiMenus from "../component/Desk-Multi-Menu";
import connect from "@frontity/connect";
import MobileSearchModel from "../component/MobileSearchModel";
import { SubMenu } from "../model/SubMenu";

const Header = ({ state, libraries, actions }) => {
  const parse = libraries.source.parse(state.router.link);
  const searchQuery = parse.query["s"];

  const { isOpen, onToggle } = useDisclosure();
  const {
    isOpen: isOpenReportModal,
    onOpen: onOpenReportModal,
    onClose: onCloseReportModal,
  } = useDisclosure();

  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const {
    isOpen: isOpendrawer,
    onOpen: onOpendrawer,
    onClose: onClosedrawer,
  } = useDisclosure();

  const firstField = React.useRef();
  const [inputValue, setinputValue] = useState(" ");
  const [showValue, setshowValue] = useState("Search here.");
  const [headerValue, setheaderValue] = useState(" ");

  // var inputValue = "";
  const [dataLoaded, setDataLoaded] = useState(false);

  // useEffect(() => {
  //   // fetchData();
  // }, [dataLoaded]); //update by Santosh

  // const fetchData = async () => {
  //   const response = await libraries.source.api.get({
  //     endpoint: `/wl/v1/menu-items`,
  //   });

  //   const postData = await response.json();
  //   actions.headerMenu.toggleLoading();
  //   actions.headerMenu.updatePostData(postData);

  //   setheaderValue(state.headerMenu.postData);
  //   console.log("header menu", headerValue);
  // };

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
  // const searchSlug = `/searchresult-for/${inputValue}`;
  // console.log("heademenuval", menus[2]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the input's value
    const searchString = inputValue.trim();
    // inputRef.current.value;
    console.log("checksearch=", searchString);

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

  // levele wise menu code
  const itemsMenu = SubMenu.items;
  // state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  const menuReleaseDate = [];
  itemsMenu.map((item) => {
    if (item.ID === 27490 && item.post_name === "brands") {
      menuReleaseDate.push(item.child_items);
    }
  });
  // console.log("items data menu = ", menuReleaseDate);

  var i = 0;
  var perentMenu = [];
  menuReleaseDate &&
    menuReleaseDate[0].map((data) => {
      var termId = data.ID;
      var slug = data.url;
      var name = data.title;
      if (data.child_items !== undefined) {
        var j = 0;
        var subMenu = [];
        data.child_items.map((item) => {
          var cId = item.ID;
          var cname = item.title;
          var cslug = item.url;

          if (item.child_items !== undefined) {
            var subMenuTemp = [];
            var k = 0;
            item.child_items.map((citems) => {
              var ccId = citems.ID;
              var ccname = citems.title;
              var ccslug = citems.url;
              subMenuTemp[k] = {
                label: ccname,
                href: ccslug,
              };

              k++;
            });

            subMenu[j] = {
              label: cname,
              href: cslug,
              submenu: subMenuTemp,
            };
          } else {
            subMenu[j] = {
              label: cname,
              href: cslug,
            };
          }

          j++;
        });

        var tempArr = {
          label: name,
          href: slug,
          submenu: subMenu,
        };
      } else {
        var tempArr = {
          label: name,
          href: slug,
        };
      }

      perentMenu.push(tempArr);
      i++;
    });

  menus[1].submenu = perentMenu;

  console.log("menu data :", menus[2]);

  return (
    <Box
      id="sticky-header"
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
            onClick={!isOpendrawer ? onOpendrawer : onClosedrawer}
            icon={
              isOpendrawer ? (
                <CloseIcon w={3} h={3} />
              ) : (
                <HamburgerIcon w={5} h={5} />
              )
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
              <img
                // boxSize="50px"
                objectFit="contain"
                src={Logo}
                width="100% !important"
                height="30px !important"
                alt={state.frontity.company_name + " logo"}
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
                            display={{ base: "block", md: "none" }}
                            color="#9DA7BE"
                            bg="#F2F2F2"
                          >
                            <InputRightElement
                              pointerEvents="visibleFill"
                              children={
                                // <Link link={searchSlug}>
                                <FaSearch
                                  onClick={(e) => handleSubmit(e)}
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
                            alignItems={{
                              base: "flex-start",
                              md: "baseline",
                            }}
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
                                  <WrapItem key={"Headersk1-" + index}>
                                    <Center
                                      onClick={() => {
                                        // onToggle;
                                        onCloseReportModal();
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
                    value={inputValue}
                    onChange={(event) => {
                      event.preventDefault();
                      setshowValue(event.target.value);
                      setinputValue(event.target.value);
                    }}
                    variant="unstyled"
                    w={{ md: "50", lg: "60" }}
                  />
                </Center>
                <Center>
                  {/* <Link link={searchSlug}> */}
                  <Button
                    onClick={(e) => handleSubmit(e)}
                    bg="#3E485D"
                    colorScheme="#3E485D"
                    color="#FFFFFF"
                    variant="solid"
                    h="50"
                    w="32"
                    _focus={"outline:none;"}
                  >
                    <Text fontWeight="500" fontSize="xs">
                      Find Item
                    </Text>
                  </Button>
                  {/* </Link> */}
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
                onClick={onOpenModal}
              />
              <MobileSearchModel
                onCloseModal={onCloseModal}
                isOpenModal={isOpenModal}
                // handleSubmit={(e) => handleSubmit(e)}
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
        <DeskMultiMenus menus={menus} />
        {/* <DesktopNav /> */}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav
          isOpendrawer={isOpendrawer}
          onClosedrawer={onClosedrawer}
          onToggleDrawer
        />
      </Collapse>
    </Box>
  );
};

export default connect(Header);
export const DrawerToggle = React.createContext();

export const MobileNav = ({
  isOpendrawer,
  onClosedrawer,
  onToggleDrawer,
  state,
}) => {
  var data = "oka";

  return (
    <DrawerToggle.Provider value={onClosedrawer}>
      <Drawer
        placement="left"
        isOpen={isOpendrawer}
        onClose={onClosedrawer}
        w="200px"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Fastsole Menu</DrawerHeader>

          <DrawerBody>
            <Stack
              bg={useColorModeValue("white", "gray.800")}
              p={4}
              display={{ md: "none" }}
            >
              <MobileMultiMenus menus={menus} />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </DrawerToggle.Provider>
  );
};

const menus = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "Release Dates",
    href: "/sneaker-release-dates/",
    submenu: [],
    // [
    // {
    //   label: "Sub Menu 1",
    //   href: "/submenu1",
    //   submenu: [
    //     {
    //       label: "Boom 1",
    //       href: "/boom1",
    //     },
    //     {
    //       label: "Boom 2",
    //       href: "/boom2",
    //     },
    //   ],
    // },
    // {
    //   label: "Sub Menu 2",
    //   href: "/submenu2",
    //   submenu: [
    //     {
    //       label: "Deep 1",
    //       href: "/deep1",
    //     },
    //     {
    //       label: "Deep 2",
    //       href: "/deep2",
    //       // submenu: [
    //       //   {
    //       //     label: "Lorem 1",
    //       //     href: '#',
    //       //   },
    //       //   {
    //       //     label: "Lorem 2",
    //       //     href: '#',
    //       //     submenu: [
    //       //       {
    //       //         label: "Super Deep",
    //       //         href: '#',
    //       //       }
    //       //     ]
    //       //   }
    //       // ]
    //     },
    //   ],
    // },
    // {
    //   label: "Sub Menu 3",
    //   href: "/submneu3",
    // },
    // {
    //   label: "Sub Menu 4",
    //   href: "sybmenu4",
    //   submenu: [
    //     {
    //       label: "Last 1",
    //       href: "/last1",
    //     },
    //     {
    //       label: "Last 2",
    //       href: "/last2",
    //     },
    //     {
    //       label: "Last 3",
    //       href: "/last3",
    //     },
    //   ],
    // },
    // ],
  },
  // {
  //   label: "Product",
  //   href: "/product-salepage/",
  // },
  {
    label: "News",
    href: "/sneaker-news",
  },
  {
    label: "About us",
    href: "/about/",
    // submenu: [
    //   {
    //     label: "About us",
    //     href: "#",
    //   },
    //   {
    //     label: "About us",
    //     href: "#",
    //   }
    // ]
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
