import {
  Box,
  Container,
  Divider,
  SimpleGrid,
  Stack,
  Text,
  Img,
  Icon,
  Button,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
// import { Box, Button, Icon, Text } from '@chakra-ui/react'

import { Flex, Grid, Heading, HStack } from "@chakra-ui/layout";
import FooterComponent from "./FooterComponent";
import Logo from "../images/logo.png";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  FaFacebookF,
  FaFacebookSquare,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import Link from "@frontity/components/link";
import { connect } from "frontity";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { FooterSupportModel } from "../model/FooterSupportModel";
import { FooterBrandModel } from "../model/FooterBrandModel";
import { FooterQuickLinkModel } from "../model/FooterQuickLinkModel";
import { FooterNewsCategoryModel } from "../model/FooterNewsCategoryModel";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = ({ state, libraries, actions }) => {
  // const footerBrands = state.source.get(
  //   `/menu/${state.theme.footerUrl.brand}/`
  // );
  // const footerQuicLinks = state.source.get(
  //   `/menu/${state.theme.footerUrl.quickLinks}/`
  // );
  // const footerNews = state.source.get(
  //   `/menu/${state.theme.footerUrl.quickLinks}/`
  // );

  // const homeSeo = state.source.get(`/home/`);

  // {
  //   homeSeo && console.log("checkschema", homeSeo);
  // }

  const [prompt, setPrompt] = useState("open");
  const cookies = new Cookies();
  if (cookies.get("prompt") == undefined) {
    cookies.set("prompt", "open");
    // setPrompt('open')
  }
  const closePrompt = () => {
    cookies.set("prompt", "closed");
    setPrompt("closed");
  };

  if (cookies.get("prompt") != undefined) {
    if (cookies.get("prompt") == "closed") {
    }
  }
  // console.log("prompt", prompt);

  // console.log("footerData=", footerSupport);
  return (
    <>
      <Box background="#F3F4F7" px={{ base: "6", md: "20", lg: "40" }}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <Grid
            templateColumns={{
              lg: "2fr 5fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(1, 1fr)",
              base: "repeat(1, 1fr)",
            }}
            textColor="white"
            gap={6}
          >
            <Box color="#3E485D" mb="20px">
              <Stack alignItems="flex-start">
                <Box>
                  {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
                  <Link
                    href="/"
                    _focus={{ boxShadow: "none" }}
                    display={{ base: "block", md: "inline-flex" }}
                    mb="15px"
                  >
                    <img
                      objectFit="contain"
                      src={Logo}
                      width="100% !important"
                      height="30px !important"
                      alt={state}
                      alt={state.frontity.company_name + " logo"}
                    />
                  </Link>
                </Box>

                <Box my={5}>
                  <Flex alignItems="flex-start" mt={2}>
                    <Icon as={FaMapMarkerAlt} mr={3} color="#3E485D" />{" "}
                    <Text fontSize={"sm"}>
                      <Text fontWeight={600}>Fastsole Private Ltd.</Text>
                      16 Windermere Court 22 Trinity Trees Eastbourne United
                      Kingdom BN21 3LE
                    </Text>
                  </Flex>

                  <Flex alignItems="center" mt={2}>
                    <Icon as={EmailIcon} mr={3} color="#3E485D" />{" "}
                    <Text fontSize={"sm"}>info@fastsole.co.uk</Text>
                  </Flex>

                  {/* <Flex alignItems="center" mt={2}>
                    <Icon as={PhoneIcon} mr={3} color="#3E485D" />{" "}
                    <Text fontSize={"sm"}>+123 456 7890</Text>
                  </Flex> */}
                </Box>

                <Flex mt="20px !important">
                  {/* <Icon as={FaFacebookSquare} boxSize={5} />
                                    <Icon as={FaTwitterSquare} boxSize={5} />
                                    <Icon as={FaLinkedin} boxSize={5} />
                                    <Icon as={FaInstagramSquare} boxSize={5} /> */}

                  <Box
                    border="1px solid #9DA7BE"
                    bg={"white"}
                    mr="2"
                    borderRadius="4"
                    w="30px"
                    h="30px"
                    textAlign="center"
                  >
                    <Link link="https://www.facebook.com/fastsole/">
                      <Icon as={FaFacebookF} boxSize={4} />
                    </Link>
                  </Box>
                  <Box
                    border="1px solid #9DA7BE"
                    bg={"white"}
                    mr="2"
                    borderRadius="4"
                    w="30px"
                    h="30px"
                    textAlign="center"
                  >
                    <Link link="https://twitter.com/FastSoleUK">
                      <Icon as={FaTwitter} boxSize={4} />
                    </Link>
                  </Box>
                  {/* <Box
                    border="1px solid #9DA7BE"
                    bg={"white"}
                    mr="2"
                    borderRadius="4"
                    w="30px"
                    h="30px"
                    textAlign="center"
                  >
                    <Icon as={FaLinkedinIn} boxSize={4} />
                  </Box> */}
                  <Box
                    border="1px solid #9DA7BE"
                    bg={"white"}
                    mr="2"
                    borderRadius="4"
                    w="30px"
                    h="30px"
                    textAlign="center"
                  >
                    <Link link="https://www.instagram.com/fastsole">
                      <Icon as={FaInstagram} boxSize={4} />
                    </Link>
                  </Box>
                </Flex>
              </Stack>
            </Box>
            <Box>
              <Grid
                templateColumns={{
                  lg: "1fr 1fr 1fr 1fr",
                  base: "repeat(2, 1fr)",
                  md: "repeat(2, 1fr)",
                }}
                textColor="white"
                gap={10}
              >
                <Box color="#3E485D">
                  <Stack align={"flex-start"}>
                    <Heading fontSize="md">Brands</Heading>

                    {FooterBrandModel &&
                      FooterBrandModel.items.map((item) => {
                        console.log("finalfooter", item.url);
                        return (
                          item && (
                            <Link link={item.url}>
                              <Text
                                fontSize={"md"}
                                _hover={{ color: "#ea2027" }}
                              >
                                {item.title}
                              </Text>
                            </Link>
                          )
                        );
                      })}
                  </Stack>
                </Box>
                <Box color="#3E485D">
                  <Stack align={"flex-start"}>
                    <Heading fontSize="md">Quick Links</Heading>
                    {FooterQuickLinkModel &&
                      FooterQuickLinkModel.items.map((item) => {
                        console.log("finalfooter", item.url);
                        return (
                          item && (
                            <Link link={item.url}>
                              <Text
                                fontSize={"md"}
                                _hover={{ color: "#ea2027" }}
                              >
                                {item.title}
                              </Text>
                            </Link>
                          )
                        );
                      })}
                  </Stack>
                </Box>
                <Box color="#3E485D">
                  <Stack align={"flex-start"}>
                    <Heading fontSize="md">News</Heading>

                    {FooterNewsCategoryModel &&
                      FooterNewsCategoryModel.items.map((item) => {
                        console.log("finalfooter", item.url);
                        return (
                          item && (
                            <Link link={item.url}>
                              <Text
                                fontSize={"md"}
                                _hover={{ color: "#ea2027" }}
                              >
                                {item.title}
                              </Text>
                            </Link>
                          )
                        );
                      })}
                  </Stack>
                </Box>
                <Box color="#3E485D">
                  <Stack align={"flex-start"}>
                    <Heading fontSize="md">About</Heading>

                    {FooterSupportModel &&
                      FooterSupportModel.items.map((item) => {
                        console.log("finalfooter", item.url);
                        return (
                          item && (
                            <Link link={item.url}>
                              <Text
                                fontSize={"md"}
                                _hover={{ color: "#ea2027" }}
                              >
                                {item.title}
                              </Text>
                            </Link>
                          )
                        );
                      })}
                  </Stack>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Box bg="#DEE1EA" py="4" px={{ base: "4" }}>
        <Flex
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
          textAlign="center"
          color="#3E485D"
        >
          <HStack justifyContent="center">
            <Text fontSize={{ base: "xs", md: "sm" }}>
              {" "}
              Copyright Fastsole 2021 |
            </Text>

            {/* <Link
              link={"/"}
              mr="2"
              mb={{ base: "10px !important", md: "none" }}
            > */}
            <Text fontSize={{ base: "xs", md: "sm" }}>
              {" "}
              All Rights Reserved |
            </Text>
            {/* </Link> */}
          </HStack>

          <HStack justifyContent="center">
            {/* <Link
              href={"#"}
              ml="2"
              mb={{ base: "10px !important", md: "none" }}
            > */}
            <Text fontSize={{ base: "xs", md: "sm" }}>
              {" "}
              Company Reg No. 10812528 |
            </Text>
            {/* </Link> */}
            <Link
              link="/impressum"
              mb={{ base: "10px !important", md: "none" }}
              mr="2"
            >
            <Text fontSize={{ base: "xs", md: "sm" }}> Impressum</Text>
            </Link>
          </HStack>
        </Flex>
      </Box>
      {cookies.get("prompt") == "open"
        ? prompt == "open" && (
            <Box bg="rgba(0 0 0 / 66%)" position={"relative"}>
              <Icon
                as={SmallCloseIcon}
                w={6}
                h={6}
                color="white"
                position={"absolute"}
                right={"2"}
                top={"40%"}
              />
              <Box
                textAlign={"center"}
                display={{ base: "block", md: "flex" }}
                px={"8"}
                alignItems={"center"}
                justifyContent={"center"}
                py={"4"}
              >
                <Text color={"white"} mr={"2"}>
                  We use cookies to ensure that we give you the best experience
                  on our website. If you continue to use this site we will
                  assume that you are happy with it.
                </Text>
                <Button
                  bg={"#20c19e"}
                  color={"white"}
                  m={"2"}
                  onClick={() => closePrompt()}
                >
                  Ok
                </Button>
              </Box>
            </Box>
          )
        : null}
    </>
  );
};

export default connect(Footer);
