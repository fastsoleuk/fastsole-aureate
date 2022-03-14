import React, { useState, useEffect } from "react";
import {
  Stack,
  Box,
  Heading,
  Grid,
  Text,
  Flex,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Icon } from "@chakra-ui/react";
import { css } from "frontity";
import {
  FaArrowDown,
  FaMapMarkerAlt,
  FaVoicemail,
  FaPhone,
  FaPhoneAlt,
  FaAngleRight,
  FaChevronRight,
} from "react-icons/fa";
import Link from "@frontity/components/link";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Circle,
} from "@chakra-ui/react";
import Breadcrumb from "../component/Breadcrumb";

import {
  Paginator,
  Container,
  Previous,
  Next,
  PageGroup,
  usePaginator,
} from "chakra-paginator";
import { AddIcon, EmailIcon, MinusIcon } from "@chakra-ui/icons";
import { connect } from "frontity";
import RecentNews from "../component/RecentNews";
import ViewAllbtn from "../component/ViewAllbtn";
import ViewAllMobile from "../component/ViewAllMobile";

function useHover() {
  const [hovering, setHovering] = useState(false);
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };
  return [hovering, onHoverProps];
}

const About = ({ state, libraries, actions }) => {
  const [buttonAIsHovering, buttonAHoverProps] = useHover();
  const [buttonBIsHovering, buttonBHoverProps] = useHover();

  const Html2React = libraries.html2react.Component;
  const stateData = state.router.link;
  const aboutData = state.source.page[2254];
  const authorData = state.source.author;
  // console.log("myaboutdata", aboutData.content);
  const pagesQuantity = 10;
  const { currentPage, setCurrentPage } = usePaginator({
    initialState: { currentPage: 1 },
  });

  const [style, setStyle] = useState({ display: "none" });
  const [styletow, setStyleTow] = useState({ display: "block" });

  const path = state.router.link;

  // sneakerNewsRecent;
  // console.log("recentnewsabout", sneakerNewsRecent);
  // var recentNews =
  //   sneakerNewsRecent &&
  //   sneakerNewsRecent.sort(function (a, b) {
  //     return a.price - b.price;
  //   });
  return (
    <>
      <Box
        mx={{ base: "6", md: "16", lg: "40" }}
        mt={{ base: "30px", md: "none" }}
        mb="30px !important"
      >
        {/* abouts */}
        <Stack>
          {path && <Breadcrumb breadcrumb={path} />}

          <Box bg="white" textColor="white" gap={6}>
            <Flex justifyContent="space-around" rounded="15">
              <img
                id="brand-big-img"
                width="100%"
                height="100%"
                objectFit="contain"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/34.png"
                alt={state.frontity.company_name + "About Us"}
                //   height="md"
              />
            </Flex>
          </Box>
        </Stack>
        {/* about us */}
        <Stack justifyContent="space-around" id="parag-div">
          <Box mt="10">
            <Heading
              as="h1"
              mb={4}
              fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
              color={"#3E485D"}
              fontWeight="bold"
              fontStyle="normal"
              color={"#3E485D"}
              lineHeight="normal"
            >
              {/* start */}
              {aboutData == undefined || aboutData == null ? (
                <div></div>
              ) : (
                <Html2React html={aboutData.title.rendered} />
              )}

              {/* ?end */}
            </Heading>
            <Text fontSize="sm">
              {/* start */}
              {aboutData == undefined || aboutData == null ? (
                <div></div>
              ) : (
                <Html2React html={aboutData.content.rendered} />
              )}

              {/* ?end */}
            </Text>
          </Box>
        </Stack>
        {/* location and faq section */}
        <Grid
          templateColumns={{ md: "1fr 1.4fr", sm: "repete(3, 1fr)" }}
          gap={{ base: "10", md: "10", lg: "16" }}
          mb="20"
          mt="20"
        >
          <Box>
            <Heading
              fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
              pb="6"
              color="#3E485D"
            >
              Location
            </Heading>
            <Box p="6" bg="#F5F5F5" rounded="md">
              <Heading
                fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
                pb="6"
                color="#3E485D"
              >
                Address
              </Heading>
              <Flex mb="4">
                <Icon
                  as={FaMapMarkerAlt}
                  boxSize="4"
                  marginTop={1}
                  color={"#3E485D"}
                />
                <Stack>
                  <Text
                    pl="1"
                    color={"#3E485D"}
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    Fastsole Private Ltd
                  </Text>
                  <Text pl="1" color={"#3E485D"} fontSize="sm">
                    16 Windermere Court 22 Trinity Trees, Eastbourne United
                    Kingdom BN21 3LE
                  </Text>
                </Stack>
              </Flex>
              <Flex mb="4">
                <Icon
                  as={EmailIcon}
                  marginTop={1}
                  boxSize="4"
                  color={"#3E485D"}
                />

                <Text pl="1" color={"#3E485D"} fontSize="sm">
                  fastsole@gmail.com
                </Text>
              </Flex>
              <Flex mb="4">
                <Icon
                  as={FaPhoneAlt}
                  boxSize="3"
                  marginTop={1}
                  color={"#3E485D"}
                />
                <Text pl="1" color={"#3E485D"} fontSize="sm">
                  +91000098989
                </Text>
              </Flex>
            </Box>

            <Text color="#3E485D" fontSize="sm" mt="4">
              * Fastsole Private Ltd is registered in England & Wales with
              company number 10812528
            </Text>
          </Box>
          <Box>
            <Heading
              fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
              pb="6"
              color="#3E485D"
            >
              FAQ
            </Heading>

            <Accordion allowToggle>
              <AccordionItem
                border="1px solid #E2E8F0"
                rounded="md"
                borderBottomWidth="inherit !important"
                mb="4"
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        border="none"
                        _expanded={{ bg: "#e3e3e3", color: "gray" }}
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          color="#3E485D"
                          fontSize="sm"
                          fontWeight="bold"
                        >
                          What can I expect from FastSole?{" "}
                        </Box>
                        {isExpanded ? (
                          <Circle
                            border="2px solid #3E485D"
                            w="30px"
                            h="30px"
                            bg="#3E485D"
                          >
                            <MinusIcon boxSize={3} color="#FFFFFF" />
                          </Circle>
                        ) : (
                          <Circle
                            border="2px solid #3E485D"
                            w="30px"
                            h="30px"
                            bg="#3E485D"
                          >
                            <AddIcon boxSize={3} color="#FFFFFF" />
                          </Circle>
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} color="#666666" fontSize="sm">
                      You can expect updated confirmed release time, stockists
                      and direct links to all the upcoming and hot sneaker
                      releases.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem
                border="1px solid #E2E8F0"
                rounded="md"
                borderBottomWidth="inherit !important"
                mb="4"
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        border="none"
                        _expanded={{ bg: "#e3e3e3", color: "gray" }}
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          color="#3E485D"
                          fontSize="sm"
                          fontWeight="bold"
                        >
                          What can I expect from FastSole?{" "}
                        </Box>
                        {isExpanded ? (
                          <Circle
                            border="2px solid #3E485D"
                            w="30px"
                            h="30px"
                            bg="#3E485D"
                          >
                            <MinusIcon boxSize={3} color="#FFFFFF" />
                          </Circle>
                        ) : (
                          <Circle
                            border="2px solid #3E485D"
                            w="30px"
                            h="30px"
                            bg="#3E485D"
                          >
                            <AddIcon boxSize={3} color="#FFFFFF" />
                          </Circle>
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} color="#666666" fontSize="sm">
                      You can expect updated confirmed release time, stockists
                      and direct links to all the upcoming and hot sneaker
                      releases.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem
                border="1px solid #E2E8F0"
                rounded="md"
                borderBottomWidth="inherit !important"
                mb="4"
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        border="none"
                        _expanded={{ bg: "#e3e3e3", color: "gray" }}
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          color="#3E485D"
                          fontSize="sm"
                          fontWeight="bold"
                        >
                          What can I expect from FastSole?{" "}
                        </Box>
                        {isExpanded ? (
                          <Circle
                            border="2px solid #3E485D"
                            w="30px"
                            h="30px"
                            bg="#3E485D"
                          >
                            <MinusIcon boxSize={3} color="#FFFFFF" />
                          </Circle>
                        ) : (
                          <Circle
                            border="2px solid #3E485D"
                            w="30px"
                            h="30px"
                            bg="#3E485D"
                          >
                            <AddIcon boxSize={3} color="#FFFFFF" />
                          </Circle>
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} color="#666666" fontSize="sm">
                      You can expect updated confirmed release time, stockists
                      and direct links to all the upcoming and hot sneaker
                      releases.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
        </Grid>
        {/* our tem heading */}
        {/* Recent Nike News  */}
        <Box>
          <Box display="flex" justifyContent="space-between" mb="4">
            <Heading as="h2" size="md" pb="6" color="#3E485D">
              Recent News
            </Heading>
            <ViewAllbtn link="/sneaker-news/" />
          </Box>
          <RecentNews />

          {/* view for mobile */}
          <Stack alignItems="center">
            <ViewAllMobile link="/sneaker-news/" />
          </Stack>
        </Box>
      </Box>
    </>
  );
};
export default connect(About);
